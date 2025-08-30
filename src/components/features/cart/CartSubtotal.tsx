"use client";
import { useAppSelector } from "@/redux/hooks";
import { format } from "date-fns";
const CartSubtotal = () => {
  const { subtotal, delivery, gst, total, postcode, deliveryDate } =
    useAppSelector((s) => {
      const items = s.cart.cartState.items;
      const flowersTotal = items.reduce(
        (acc, curr) => acc + curr.price * curr.qty,
        0
      );
      const sumGifts = (giftQtyItem: { qty: number; price: number }[]) => {
        return giftQtyItem.reduce(
          (acc, curr) => acc + curr.price * curr.qty,
          0
        );
      };
      const giftTotal = items.reduce(
        (acc, curr) =>
          acc +
          sumGifts(curr.giftQty.wine) +
          sumGifts(curr.giftQty.chocolate) +
          sumGifts(curr.giftQty.teddy),
        0
      );
      const subtotal = flowersTotal + giftTotal;
      const first = items[0];
      const delivery = first ? 16 : 0;

      // AU GST (10%) on goods+delivery
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
  return (
    <div className="flex flex-col border-t border-t-gray-300 py-4 bg-stone-200 p-6 mb-4">
      <div className="flex flex-row justify-between pb-3 border-b-stone-300 border-b-2">
        <span className="text-lg font-medium">Subtotal</span>
        <span className="text-lg font-medium">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex flex-row justify-between pt-2">
        <span>
          Delivery to
          <span className="underline cursor-pointer font-semibold">
            {postcode}
          </span>
        </span>
        <span className="text-lg font-medium">${delivery.toFixed(2)}</span>
      </div>
      <span className="pb-3 border-b-stone-300 border-b-2">
        on{" "}
        <span className="underline cursor-pointer font-semibold">
          {deliveryDate}
        </span>
      </span>
      <div className="flex flex-row justify-between pt-2">
        <span className="font-bold text-xl">Total</span>
        <span className="font-bold">${total.toFixed(2)}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="font-bold text-xl">GST</span>
        <span className="font-bold">${gst.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSubtotal;
