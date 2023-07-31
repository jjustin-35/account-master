import { createSlice } from '@reduxjs/toolkit';

type Auth = {
  user: {
    name: string;
    email: string;
    image?: string;
  };
};

const initialState: Auth = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    postUser: (state) => state,
    postUserSucc: (state, action) => {
      state.user = action.payload;
    },
    postUserFail: (state) => state,
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
