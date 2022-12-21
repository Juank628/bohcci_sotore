import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
        id: 1,
        name: 'Salida 1',
        decription: 'Salida de playa verde adulto',
        sale: false,
        price: 110,
        sizes: ['M', 'L']
    },
    {
        id: 2,
        name: 'Salida 2',
        decription: 'Salida de playa verde niña',
        sale: false,
        price: 120,
        sizes: ['S']
    },
    {
        id: 3,
        name: 'Salida 3',
        decription: 'Salida de playa verde adulto',
        sale: false,
        price: 130,
        sizes: ['M', 'L']
    },
    {
        id: 4,
        name: 'Salida 4',
        decription: 'Salida de playa verde niña',
        sale: false,
        price: 140,
        sizes: ['S']
    }
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    readProducts: (state) => {
      state.products = [];
    },
  },
});

export const { readProducts } = productsSlice.actions;

export default productsSlice.reducer;