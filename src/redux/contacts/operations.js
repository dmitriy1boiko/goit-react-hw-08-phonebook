import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
   
    try {
      
      const response = await axios.post('/contacts', {
        name: newContact.name,
        number: newContact.number,
      });
      
      return response.data; // dispatch({type: "contacts/addContact/fulfilled", payload: response.data })
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // dispatch({type: "contacts/addContact/rejected", payload: error.message })
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

