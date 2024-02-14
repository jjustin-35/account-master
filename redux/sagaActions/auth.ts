import { createAction } from '@reduxjs/toolkit';

import { UserType } from '@/constants/types/modal';

export const postSignup = createAction<UserType>('auth/postSignup');
