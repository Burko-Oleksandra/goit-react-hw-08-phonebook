import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, addContact } from '../slices/contactSlice';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://6393c09eab513e12c515b4d6.mockapi.io/contacts/contacts'
      );

      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async function ({ name, number }, { rejectWithValue }) {
    try {
      const contact = {
        name,
        number,
      };

      const response = await fetch(
        'https://6393c09eab513e12c515b4d6.mockapi.io/contacts/contacts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        throw new Error("Can't add contact. Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFetchContact = createAsyncThunk(
  'contacts/deleteFetchContact',
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://6393c09eab513e12c515b4d6.mockapi.io/contacts/contacts/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error("Can't delete contact. Server Error!");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
