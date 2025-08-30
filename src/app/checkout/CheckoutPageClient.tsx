"use client";
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";

const CheckoutPageClient = () => {
  const { items } = useAppSelector((s) => {
    const items = s.cart.cartState.items;
    return { items };
  });
  if (items.length == 0) redirect("/");
  return <div>Checkout</div>;
};
export default CheckoutPageClient;
