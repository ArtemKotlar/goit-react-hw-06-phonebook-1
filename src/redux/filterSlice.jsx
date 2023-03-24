import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    setContactFilter: (state, action) => (state = action.payload),
  },
});

export default filterSlice.reducer;
export const { setContactFilter } = filterSlice.actions;
