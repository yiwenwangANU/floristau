"use client";
import useGetCartSubtotal from "../../cart/hooks/useGetCartSubtotal";
const CartSubtotalCheckout = () => {
  const { subtotal, delivery, gst, total, postcode, deliveryDate } =
    useGetCartSubtotal();
  return (
    <div className="flex flex-col border-t border-t-gray-300 py-4 bg-stone-200 p-6 mb-4">
      <div className="flex flex-row justify-between pb-3 border-b-stone-300 border-b-2">
        <span className="text-lg font-medium">Subtotal</span>
        <span className="text-lg font-medium">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex flex-row justify-between pt-2">
        <span>
          Delivery to <span className="font-semibold">{postcode}</span>
        </span>
        <span className="text-lg font-medium">${delivery.toFixed(2)}</span>
      </div>
      <span className="pb-3 border-b-stone-300 border-b-2">
        on <span className="font-semibold">{deliveryDate}</span>
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

export default CartSubtotalCheckout;
