import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    deleteCartItem: (state, action) => {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = filteredCartItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addCartItem, deleteCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
