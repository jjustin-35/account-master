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
    postUser: (state) => state,
    postUserSucc: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
    postUserFail: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
