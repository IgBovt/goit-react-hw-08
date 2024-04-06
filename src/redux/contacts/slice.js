import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { logOut } from '../auth/operations';
// import { selectNameFilter } from '../filters/slice';

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
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, state => {
        state.error = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.loading = false;
      }),
});

// export const filteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

// export const filteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectNameFilter(state);
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export default slice.reducer;
