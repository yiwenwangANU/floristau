import Button from "@/components/ui/Button";
import useCheckout from "@/hooks/useCheckout";
import { useAppSelector } from "@/redux/hooks";
import { useMutation } from "@tanstack/react-query";

const CheckoutButton = () => {
  const { items } = useAppSelector((s) => {
    const items = s.cart.cartState.items;
    return { items };
  });
  const { mutate } = useCheckout();
  const handleCheckout = () => {
    console.log(items);
  };
  return (
    <div className="flex justify-center p-10">
      <Button variant="blackFull" onClick={handleCheckout}>
        Check Out
      </Button>
    </div>
  );
};
export default CheckoutButton;
