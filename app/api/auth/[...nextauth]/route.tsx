import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

import connectMongodb from '@/helpers/mongodb';
import User from '@/models/user';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Login',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@mail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongodb();

          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const isValid = await user.comparePassword(password);

          if (!isValid) {
            return null;
          }

          const { _id, email: userEmail, username, avatar } = user;

          return { id: _id.toString(), username, avatar, userEmail };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
