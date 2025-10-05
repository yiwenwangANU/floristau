"use client";
import useGetCartSubtotal from "@/features/products/shared/hooks/useGetCartSubtotal";

const CartSubtotalCheckout = () => {
  const { subtotal, delivery, gst, total, postcode, deliveryDate } =
    useGetCartSubtotal();
  return (
    <div className="mb-4 flex flex-col border-t border-t-gray-300 bg-stone-200 p-6 py-4">
      <div className="flex flex-row justify-between border-b-2 border-b-stone-300 pb-3">
        <span className="text-lg font-medium">Subtotal</span>
        <span className="text-lg font-medium">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex flex-row justify-between pt-2">
        <span>
          Delivery to <span className="font-semibold">{postcode}</span>
        </span>
        <span className="text-lg font-medium">${delivery.toFixed(2)}</span>
      </div>
      <span className="border-b-2 border-b-stone-300 pb-3">
        on <span className="font-semibold">{deliveryDate}</span>
      </span>
      <div className="flex flex-row justify-between pt-2">
        <span className="text-xl font-bold">Total</span>
        <span className="font-bold">${total.toFixed(2)}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-xl font-bold">GST</span>
        <span className="font-bold">${gst.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSubtotalCheckout;
