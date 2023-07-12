import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { filterReducer } from './filter/filterReducer';
import contactsReducer from './contacts/contactsSlice';
// const rootReducer = combineReducers({
//   contacts: contactsReducer ,
//   filter: filterReducer
// });
// const persistContactConfig = {
//   key:'contacts',
//   storage:storage,
//   whitelist:['contacts']
// }

// const persistedContactsReducer = persistReducer(persistContactConfig, contactsReducer)

export const store = configureStore({
  
  reducer:{
    auth:authReducer,
    contacts:contactsReducer,},
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store)