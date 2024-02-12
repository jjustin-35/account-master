import { NextResponse as response } from 'next/server';

import { UserType } from '@/constants/types/modal';

import prisma from '@/lib/prisma';
import encryptPassword from '@/helpers/password';

export async function POST(req: Request) {
  try {
    const userData = await req.json();
    if (!userData)
      return response.json({
        status: 'error',
        message: 'Bad request',
      });

    const { email, password, username, avatar } = userData;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return response.json({
        status: false,
        message: 'User already exist',
      });
    }

    const encryptedPassword = await encryptPassword(password);

    const newUser: UserType = {
      email,
      username,
      password: encryptedPassword,
      avatar: avatar,
    };

    const createdUser = await prisma.user.create({
      data: newUser,
    });

    if (!createdUser) {
      return response.json({
        status: false,
        message: 'User create failed',
      });
    }

    return response.json({
      status: true,
      message: 'User created',
    });
  } catch (error: any) {
    console.log(error);
    return response.json({
      status: false,
      message: error.message,
    });
  }
}
