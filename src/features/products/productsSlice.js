import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 1,
      name: 'Salida 1',
      description: 'Salida de playa verde adulto',
      sale: false,
      price: 110,
      stock: [
        {
          size: 'M',
          quantity: 5,
        },
        {
          size: 'S',
          quantity: 3,
        },
      ],
    },
    {
      id: 2,
      name: 'Salida 2',
      description: 'Salida de playa verde niña',
      sale: false,
      price: 120,
      stock: [
        {
          size: 'L',
          quantity: 6,
        },
        {
          size: 'M',
          quantity: 4,
        },
      ],
    },
    {
      id: 3,
      name: 'Salida 3',
      description: 'Salida de playa verde adulto',
      sale: false,
      price: 130,
      stock: [
        {
          size: 'XL',
          quantity: 1,
        },
        {
          size: 'S',
          quantity: 2,
        },
      ],
    },
    {
      id: 4,
      name: 'Salida 4',
      description: 'Salida de playa verde niña',
      sale: false,
      price: 140,
      stock: [
        {
          size: 'S',
          quantity: 2,
        },
        {
          size: 'M',
          quantity: 1,
        },
      ],
    },
  ],
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
    }
  },
});

export const { readProducts, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
