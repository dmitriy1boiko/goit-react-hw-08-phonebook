import { createSlice } from '@reduxjs/toolkit';
import { logoutOperation } from 'redux/auth/authOperations';
import { addContacts, deleteContacts, getContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          el => el.id !== payload
        );
      })
      .addCase(logoutOperation.fulfilled, (state, { payload }) => {
        return {
          initialState,
        };
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.contacts.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('contacts') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      );
  },
});


export const { filterContact } = contactsSlice.actions;
export default contactsSlice.reducer;
