import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, par) => {
      state.cartItems.push(par.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
