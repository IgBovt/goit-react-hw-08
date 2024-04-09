import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import { logOut } from '../auth/operations';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(editContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.items = state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
        state.loading = false;
      })
      .addCase(editContact.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.loading = false;
      }),
});

export default slice.reducer;
