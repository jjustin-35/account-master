import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { authActions } from '../slices/auth';
import { SIGNUP_PATH } from '@/constants/apiPath';

const { postUser: postUserAction } = authActions;

function* postUser(action: PayloadAction) {
  const userData = action.payload;
  try {
    const response = yield call(fetch, SIGNUP_PATH, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const respData = yield response.json();
    if (respData.status === 'error' || respData.status === 'fail') {
      yield put(authActions.postUserFail(respData));
      return;
    }

    yield put(authActions.postUserSucc(respData));
  } catch (error) {
    console.log(error);
    yield put(
      authActions.postUserFail({ status: 'error', message: error.message }),
    );
  }
}

export default [takeEvery(postUserAction.toString(), postUser)];
