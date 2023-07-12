import {createSlice} from '@reduxjs/toolkit';


const initialState ={
  isAuth: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

export const authReducer = authSlice.reducer;