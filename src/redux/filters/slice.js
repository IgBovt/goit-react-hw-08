import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.trim();
      state.number = action.payload.trim();
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
