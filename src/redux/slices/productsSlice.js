import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiURL } from '../../utilities/parameters';

const initialState = {
  list: [],
};

export const readAllProducts = createAsyncThunk(
  'products/readAllProducts',
  async () => {
    const res = await fetch(apiURL);
    const products = await res.json();
    return products;
  },
);

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
  extraReducers: (builder) => {
    builder.addCase(readAllProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { readProducts, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
