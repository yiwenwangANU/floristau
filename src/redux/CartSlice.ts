import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../libs/types/cart";

const initialState: CartState = {
  cartState: { items: [] },
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    newItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.cartState.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.qty += action.payload.qty;
      } else {
        state.cartState.items.push(action.payload);
        console.log("New item added to cart:", action.payload);
      }
    },
    increment: (state, action: PayloadAction<string>) => {
      const existing = state.cartState.items.find(
        (item) => item.id === action.payload
      );
      if (existing) {
        existing.qty += 1;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const existing = state.cartState.items.find(
        (item) => item.id === action.payload
      );
      if (existing && existing.qty > 1) {
        existing.qty -= 1;
      }
      if (existing && existing.qty === 1) {
        state.cartState.items = state.cartState.items.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartState.items = state.cartState.items.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartState.items = [];
    },
  },
});

export const { newItem, increment, decrement, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
