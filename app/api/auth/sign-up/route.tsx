import { NextResponse as response } from 'next/server';

import connectMongodb from '@/helpers/mongodb';
import User, { IUser } from '@/models/user';

export async function POST(req: Request) {
  try {
    const { email, password, username, avatar } = await req.json();

    await connectMongodb();

    const user = await User.findOne({ email });

    if (user) {
      return response.json({
        status: 'exist',
        message: 'User already exist',
      });
    }

    const newUser = new User<IUser>({
      email,
      password,
      username,
      avatar,
    });

    await newUser.save();

    return response.json({
      status: 'success',
      message: 'User created',
    });
  } catch (error: any) {
    console.log(error);
    return response.json({
      status: 'error',
      message: error.message,
    });
  }
}
