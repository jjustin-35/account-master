import { createAction } from '@reduxjs/toolkit';

import { UserType } from '@/constants/types/modal';

export const postSignup = createAction(
  'auth/postSignup',
  (payload: UserType) => ({
    payload,
  }),
);
