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
    increment: (state, action: PayloadAction<number>) => {
      const existing = state.cartState.items.find(
        (item) => item.flowerId === action.payload
      );
      if (existing) {
        existing.qty += 1;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const existing = state.cartState.items.find(
        (item) => item.flowerId === action.payload
      );
      if (existing && existing.qty > 1) {
        existing.qty -= 1;
      }
      if (existing && existing.qty === 1) {
        state.cartState.items = state.cartState.items.filter(
          (item) => item.flowerId !== action.payload
        );
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartState.items = state.cartState.items.filter(
        (item) => item.id !== action.payload
      );
    },
    updateGiftQty: (
      state,
      action: PayloadAction<{
        id: string;
        type: "wine" | "chocolate" | "teddy";
        giftName: string;
        giftQty: number;
      }>
    ) => {
      const item = state.cartState.items.find(
        (item) => item.id === action.payload.id
      );
      if (!item) return;
      const gift = item.giftQty[action.payload.type].find(
        (gift) => gift.name === action.payload.giftName
      );
      if (!gift) return;
      gift.qty = Math.max(0, action.payload.giftQty);
    },
    clearCart: (state) => {
      state.cartState.items = [];
    },
  },
});

export const {
  newItem,
  increment,
  decrement,
  removeItem,
  updateGiftQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
