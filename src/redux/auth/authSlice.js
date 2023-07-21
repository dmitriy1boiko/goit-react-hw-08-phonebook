import { createSlice } from '@reduxjs/toolkit';
import {
  loginOperation,
  logoutOperation,
  refreshUser,
  registerOperation,
} from './authOperations';

const initialState = {
  isAuth: false,
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(registerOperation.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(registerOperation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginOperation.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(loginOperation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutOperation.fulfilled, (state, { payload }) => {
        return {
          initialState,
        };
      })
      .addCase(logoutOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.isLoading = false;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      );
  },
});

export default authSlice.reducer;
