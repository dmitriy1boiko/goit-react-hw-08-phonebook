import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  
});

 export default authSlice.reducer;