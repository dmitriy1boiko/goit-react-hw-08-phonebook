import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contactsSlice';
import authReducer from './auth/authSlice';

const persistContactConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const persistedContactsReducer = persistReducer(
  persistContactConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistedContactsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
