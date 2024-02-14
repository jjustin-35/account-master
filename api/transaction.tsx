import { DailyTransactionType } from '@/constants/types/modal';
import { TRANSACTION_CREATE_PATH } from '@/constants/apiPath';
import fetchApi from '@/helpers/apiHandler';
import { ApiMethods } from '@/constants/apiTypes';

export const createTransaction = async (data: DailyTransactionType) => {
  const result = await fetchApi({
    url: TRANSACTION_CREATE_PATH,
    method: ApiMethods.POST,
    data,
  });

  return result;
};
