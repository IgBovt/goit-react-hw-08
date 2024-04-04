import { createSlice } from '@reduxjs/toolkit';
import { LogIn, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    loading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(register.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(LogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      }),
});

export default authSlice.reducer;
