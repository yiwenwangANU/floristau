import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.carts.push(action.payload);
    },
    removeCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload.id);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
