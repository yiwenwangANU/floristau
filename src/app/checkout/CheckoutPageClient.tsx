"use client";
import CartCardCheckout from "@/components/features/checkout/CartCardCheckout";
import CartSubtotalCheckout from "@/components/features/checkout/CartSbutotalCheckout";
import SenderForm from "@/components/features/checkout/SenderForm";
import SenderInfo from "@/components/features/checkout/SenderInfo";
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";

const CheckoutPageClient = () => {
  const { items } = useAppSelector((s) => {
    const items = s.cart.cartState.items;
    return { items };
  });
  const sender = useAppSelector((s) => s.sender);
  if (items.length == 0) redirect("/");
  return (
    <div className="px-40 py-20 grid grid-cols-[2fr_1fr] gap-40">
      <div>
        <h1 className="text-4xl py-10">Checkout</h1>
        {sender.mode == "form" ? (
          <SenderForm />
        ) : sender.mode == "info" ? (
          <SenderInfo />
        ) : null}
      </div>
      <div className="py-10">
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
