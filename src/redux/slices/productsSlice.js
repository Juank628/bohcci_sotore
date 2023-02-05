import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    readProducts: (state) => {
      state.products = [];
    },
    setProducts: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { readProducts, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
