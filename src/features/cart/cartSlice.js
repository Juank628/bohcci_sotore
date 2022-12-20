import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantity: -1,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.quantity = 0;
    },
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
