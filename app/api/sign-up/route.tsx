import { NextResponse as response } from 'next/server';

import connectMongodb from '@/helpers/mongodb';
import UserModel, { IUser } from '@/models/user';

export async function POST(req: Request) {
  try {
    const { email, password, nickname, avatar } = await req.json();

    await connectMongodb();

    const user = await UserModel.findOne({ email });

    if (user) {
      return response.json({
        status: 'exist',
        message: 'User already exist',
      });
    }

    const newUser = new UserModel<IUser>({
      email,
      password,
      nickname,
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
