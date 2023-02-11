import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const readAllProducts = createAsyncThunk(
  'products/readAllProducts',
  async () => {
    const { VITE_API_1_URL } = import.meta.env;
    const res = await fetch(`${VITE_API_1_URL}/products`);
    const products = await res.json();
    return products;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readAllProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default productsSlice.reducer;
