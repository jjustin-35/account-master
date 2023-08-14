import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  status: 'success' | 'fail' | 'error';
  message: string;
};

const initialState: AuthState = {
  status: null,
  message: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    postSignupSucc: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
    postSignupFail: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
