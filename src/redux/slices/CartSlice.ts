import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../libs/types/cart";

const initialState: CartState = {
  cartState: { items: [] },
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    newItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.cartState.items.find(
        (item) => item.id === action.payload.id,
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
        (item) => item.productId === action.payload,
      );
      if (existing) {
        existing.qty += 1;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const existing = state.cartState.items.find(
        (item) => item.productId === action.payload,
      );
      if (existing && existing.qty > 1) {
        existing.qty -= 1;
      }
      if (existing && existing.qty === 1) {
        state.cartState.items = state.cartState.items.filter(
          (item) => item.productId !== action.payload,
        );
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartState.items = state.cartState.items.filter(
        (item) => item.id !== action.payload,
      );
    },
    updateGiftQty: (
      state,
      action: PayloadAction<{
        id: string;
        type: "wine" | "chocolate" | "teddy";
        giftName: string;
        giftQty: number;
        giftPrice: number;
      }>,
    ) => {
      const item = state.cartState.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!item) return;

      item.giftQty[action.payload.type] ??= [];
      const list = item.giftQty[action.payload.type];

      const giftIndex = list.findIndex(
        (gift) => gift.name === action.payload.giftName,
      );

      if (giftIndex >= 0) {
        if (action.payload.giftQty <= 0) {
          // remove gift when qty goes to 0
          list.splice(giftIndex, 1);
        } else {
          // update qty if still > 0
          list[giftIndex].qty = action.payload.giftQty;
        }
      } else {
        if (action.payload.giftQty > 0) {
          // add new gift if not in list yet
          list.push({
            name: action.payload.giftName,
            qty: action.payload.giftQty,
            price: action.payload.giftPrice,
            type: action.payload.type,
          });
        }
      }
    },

    removeGift: (
      state,
      action: PayloadAction<{
        id: string;
        type: "wine" | "chocolate" | "teddy";
        giftName: string;
      }>,
    ) => {
      const item = state.cartState.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!item) return;
      const gift = item.giftQty[action.payload.type].find(
        (gift) => gift.name === action.payload.giftName,
      );
      if (!gift) return;
      item.giftQty[action.payload.type] = item.giftQty[
        action.payload.type
      ].filter((gift) => gift.name !== action.payload.giftName);
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
  removeGift,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
