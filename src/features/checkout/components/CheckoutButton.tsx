"use client";
import Button from "@/components/ui/Button";
import useCheckout from "@/features/checkout/hooks/useCheckout";
import { useAppSelector } from "@/redux/hooks";

const CheckoutButton = () => {
  const sender = useAppSelector((s) => s.sender);
  const recipient = useAppSelector((s) => s.recipient);
  const { items } = useAppSelector((s) => {
    const items = s.cart.cartState.items;
    return { items };
  });
  const { mutate } = useCheckout();
  const handleCheckout = () => {
    console.log(items);
  };

  if (sender.mode == "info" && recipient.mode == "info")
    return (
      <div className="flex justify-center p-10">
        <Button variant="blackFull" onClick={handleCheckout}>
          Check Out
        </Button>
      </div>
    );
};
export default CheckoutButton;
