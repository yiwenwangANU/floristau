import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectCartItems = (state: RootState) => state.cart.cartState.items;

export const selectCartSubtotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.qty, 0),
);
