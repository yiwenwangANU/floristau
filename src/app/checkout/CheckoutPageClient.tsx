"use client";
import CartCardCheckout from "@/components/features/checkout/CartCardCheckout";
import CartSubtotalCheckout from "@/components/features/checkout/CartSbutotalCheckout";
import SenderForm from "@/components/features/checkout/SenderForm";
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";

const CheckoutPageClient = () => {
  const { items } = useAppSelector((s) => {
    const items = s.cart.cartState.items;
    return { items };
  });
  if (items.length == 0) redirect("/");
  return (
    <div className="pt-20 flex flex-row justify-between mx-64">
      <div>
        <h1 className="text-4xl py-10">Checkout</h1>
        <SenderForm />
      </div>
      <div>
        {items.map((item) => (
          <CartCardCheckout
            key={item.id}
            name={item.name}
            size={item.size}
            price={item.price}
            imageUrl={item.imageUrl}
            giftQty={item.giftQty}
          />
        ))}
        <CartSubtotalCheckout />
      </div>
    </div>
  );
};
export default CheckoutPageClient;
