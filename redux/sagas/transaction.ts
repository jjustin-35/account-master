import { call, put, takeEvery } from 'redux-saga/effects';
import { createTransaction as createTransactionApi } from '@/api/transaction';
import { createTransaction as createTransactionAction } from '../sagaActions/transaction';

function* createTransaction(
  action: ReturnType<typeof createTransactionAction>,
) {
  const dailyTransaction = action.payload;

  try {
    const resp = yield call(createTransactionApi, dailyTransaction);
    if (!resp.status) {
      console.error(resp.message);
      return;
    }

    yield put(createTransactionAction(resp));
  } catch (err) {
    console.error(err);
  }
}

export default [
  takeEvery(createTransactionAction.toString(), createTransaction),
];
