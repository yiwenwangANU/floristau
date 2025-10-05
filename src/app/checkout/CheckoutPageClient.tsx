"use client";
import CartCardCheckout from "@/features/checkout/components/CartCardCheckout";
import CartSubtotalCheckout from "@/features/checkout/components/CartSubtotalCheckout";
import CheckoutButton from "@/features/checkout/components/CheckoutButton";
import RecipientForm from "@/features/checkout/components/RecipientForm";
import RecipientInfo from "@/features/checkout/components/RecipientInfo";
import SenderForm from "@/features/checkout/components/SenderForm";
import SenderInfo from "@/features/checkout/components/SenderInfo";
import { useAppSelector } from "@/redux/hooks";
import { LoadScript } from "@react-google-maps/api";
import { redirect } from "next/navigation";

const CheckoutPageClient = () => {
  const { items } = useAppSelector((s) => {
    const items = s.cart.cartState.items;
    return { items };
  });
  const sender = useAppSelector((s) => s.sender);
  const recipient = useAppSelector((s) => s.recipient);
  if (items.length == 0) redirect("/");
  const libraries: "places"[] = ["places"];
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={libraries}
    >
      <div className="grid grid-cols-[2fr_1fr] gap-40 px-40 py-20">
        <div>
          <h1 className="py-10 text-4xl">Checkout</h1>
          {sender.mode == "form" ? <SenderForm /> : <SenderInfo />}
          {recipient.mode == "form" ? (
            <RecipientForm />
          ) : recipient.mode == "info" ? (
            <RecipientInfo />
          ) : null}
          {sender.mode == "info" && recipient.mode == "info" && (
            <CheckoutButton />
          )}
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
    </LoadScript>
  );
};
export default CheckoutPageClient;
