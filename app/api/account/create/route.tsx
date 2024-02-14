import { NextResponse as response } from 'next/server';
import prisma from '@/lib/prisma';

enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
  DEPOSIT = 'DEPOSIT',
}

type TransactionItemType = {
  transactionType: TransactionType;
  categoryType: string;
  subCategoryType: string;
};

type DataType = {
  date: Date;
  name: string;
  amount: number;
  type: TransactionItemType;
  userEmail: string;
};

export async function POST(req: Request) {
  try {
    const data: DataType = await req.json();
    if (!data)
      return response.json(
        {
          status: false,
          message: 'Bad request',
        },
        { status: 400 },
      );

    const { date, ...restData } = data;

    const dailyTransactions = await prisma.dailyTransactions.findFirst({
      where: {
        date,
      },
    });

    if (!dailyTransactions) {
      const createdDailyTransactions = await prisma.dailyTransactions.create({
        data: {
          date,
          total: data.amount,
          transactions: {
            create: {
              ...restData,
              user: {
                connect: {
                  email: data.userEmail,
                },
              },
            },
          },
          user: {
            connect: {
              email: data.userEmail,
            },
          },
        },
      });

      if (!createdDailyTransactions) {
        return response.json(
          {
            status: false,
            message: 'Daily transactions create failed',
          },
          { status: 500 },
        );
      }

      return response.json({
        status: true,
        message: 'Daily transactions created',
      });
    }

    const total = dailyTransactions.total + data.amount;
    const updatedDailyTransactions = await prisma.dailyTransactions.update({
      where: {
        id: dailyTransactions.id,
      },
      data: {
        total,
        transactions: {
          create: {
            ...restData,
            user: {
              connect: {
                email: data.userEmail,
              },
            },
          },
        },
      },
    });

    if (!updatedDailyTransactions) {
      return response.json(
        {
          status: false,
          message: 'Daily transactions update failed',
        },
        { status: 500 },
      );
    }
  } catch (err) {
    console.log(err);
    return response.json(
      {
        status: false,
        message: err.message,
      },
      { status: 500 },
    );
  }
}
