import { DailyTransactionType } from '@/constants/types/modal';
import { COUNTING_CREATE_PATH } from '@/constants/apiPath';
import fetchApi from '@/helpers/apiHandler';
import { ApiMethods } from '@/constants/apiTypes';

export const createCounting = async (data: DailyTransactionType) => {
  const result = await fetchApi({
    url: COUNTING_CREATE_PATH,
    method: ApiMethods.POST,
    data,
  });

  return result;
};
