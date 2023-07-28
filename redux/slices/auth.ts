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
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
