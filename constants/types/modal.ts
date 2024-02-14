import { TransactionType } from '../modalTypes';
export type UserType = {
  email: string;
  username: string;
  password: string;
  avatar?: string;
};

export type TransactionItemType = {
  transactionType: TransactionType;
  categoryType: string;
  subCategoryType: string;
};

export type DailyTransactionType = {
  date: Date;
  name: string;
  amount: number;
  type: TransactionItemType;
  userEmail: string;
};
