import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { authActions } from '../slices/auth';
import { SIGNUP_PATH } from '@/constants/apiPath';

import { postSignup } from '../sagaActions/auth';

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
    if (!respData.status) {
      yield put(authActions.postSignupFail(respData));
      return;
    }

    yield put(authActions.postSignupSucc(respData));
  } catch (error) {
    console.log(error);
    yield put(
      authActions.postSignupFail({ status: false, message: error.message }),
    );
  }
}

export default [takeEvery(postSignup.toString(), postUser)];
