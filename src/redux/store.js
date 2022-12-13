import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
