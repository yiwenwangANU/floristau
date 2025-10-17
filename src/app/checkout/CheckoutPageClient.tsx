"use client";
import CheckoutButton from "@/features/checkout/components/CheckoutButton";
import ProductsSummary from "@/features/checkout/components/ProductsSummary";
import RecipientDetails from "@/features/checkout/components/RecipientDetails";
import SenderDetails from "@/features/checkout/components/SenderDetails";
import { useAppSelector } from "@/redux/hooks";

import { redirect } from "next/navigation";

const CheckoutPageClient = () => {
  const { items } = useAppSelector((s) => {
    const items = s.cart.cartState.items;
    return { items };
  });

  if (items.length == 0) redirect("/");

  return (
    <div className="grid grid-cols-[2fr_1fr] gap-40 px-40 py-20">
      <div>
        <h1 className="py-10 text-4xl">Checkout</h1>
        <SenderDetails />
        <RecipientDetails />
        <CheckoutButton />
      </div>
      <ProductsSummary />
    </div>
  );
};
export default CheckoutPageClient;
