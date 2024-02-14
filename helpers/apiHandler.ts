import { stringify } from 'querystring';
import { ApiMethods } from '@/constants/apiTypes';
import { ApiReturnType } from '@/constants/types/global';

type FetchApiType = {
  url: string;
  method: ApiMethods;
  data?: any;
  headers?: Record<string, string>;
};

const fetchApi = async ({ url, method, data, headers }: FetchApiType) => {
  const query = method === ApiMethods.GET && data ? stringify(data) : '';
  const apiUrl = method === ApiMethods.GET && query ? `${url}?${query}` : url;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...(method !== ApiMethods.GET && { body: JSON.stringify(data) }),
  };

  try {
    const resp = await fetch(apiUrl, options);
    const result: ApiReturnType = await resp.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export default fetchApi;
