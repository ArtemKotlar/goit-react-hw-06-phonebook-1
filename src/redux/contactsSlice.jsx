import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('contacts')) ?? [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    removeContact: (state, action) => {
      const newArr = state.items.filter(item => item.id !== action.payload);
      state.items = newArr;
    },
  },
});

export default contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
