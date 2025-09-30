// selectors/cartSelectors.ts
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { format } from "date-fns";

const selectCartItems = (state: RootState) => state.cart.cartState.items;

export const selectCartSubtotal = createSelector([selectCartItems], (items) => {
  const flowersTotal = items.reduce(
    (acc, curr) =>
      acc + curr.price * curr.qty + (curr.size === "premium" ? 20 : 0),
    0,
  );

  const sumGifts = (giftQtyItem: { qty: number; price: number }[]) =>
    giftQtyItem.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  const giftTotal = items.reduce(
    (acc, curr) =>
      acc +
      sumGifts(curr.giftQty.wine) +
      sumGifts(curr.giftQty.chocolate) +
      sumGifts(curr.giftQty.teddy),
    0,
  );

  const subtotal = flowersTotal + giftTotal;
  const first = items[0];
  const delivery = first ? 16 : 0;

  // AU GST (10%) on goods + delivery
  const gst = Math.round((subtotal + delivery) * 0.1 * 100) / 100;

  const total = Math.round((subtotal + delivery) * 100) / 100;

  const postcode = first?.postcode ?? "";
  const deliveryDate =
    first && first.deliveryDateISO
      ? format(new Date(first.deliveryDateISO), "dd MMM yyyy")
      : null;

  return {
    subtotal,
    delivery,
    gst,
    total,
    postcode,
    deliveryDate,
  };
});
