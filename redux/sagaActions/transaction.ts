import { DailyTransactionType } from '@/constants/types/modal';
import { createAction } from '@reduxjs/toolkit';

export const createTransaction = createAction<DailyTransactionType>(
  'counting/createTransaction',
);

export const getTransactionList = createAction<{ month: number }>(
  'counting/getTransactionList',
);
