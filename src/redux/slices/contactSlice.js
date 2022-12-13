import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact, deleteFetchContact } from '../thunks';

const setError = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const setPending = state => {
  state.status = 'loading';
  state.error = null;
};

const setfulfilled = (state, { payload }) => {
  state.status = 'resolved';
  state.contacts = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filteredString: '',
    status: null,
    error: null,
  },
  reducers: {
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter(state, { payload }) {
      state.filteredString = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, setPending);
    builder.addCase(fetchContacts.fulfilled, setfulfilled);
    builder.addCase(fetchContacts.rejected, setError);

    builder.addCase(deleteFetchContact.rejected, setError);

    builder.addCase(addNewContact.pending, setPending);
    builder.addCase(addNewContact.fulfilled, (state, { payload }) => {
      state.status = 'resolved';
      state.contacts.unshift(payload);
    });
    builder.addCase(addNewContact.rejected, setError);
  },
});

export const { deleteContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
