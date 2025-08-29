import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartCard from "./CartCard";
import { Dialog } from "radix-ui";

const CartContent = () => {
  const items = useSelector((state: RootState) => state.cart.cartState.items);
  return (
    <>
      <Dialog.Title className="m-0 text-2xl font-semibold">
        Your Cart
      </Dialog.Title>
      <div className="mt-[25px] flex flex-col gap-4">
        {items.length === 0 && <p>Your cart is empty.</p>}
        {items.map((item) => (
          <CartCard
            key={item.id}
            id={item.id}
            name={item.name}
            size={item.size}
            price={item.price}
            imageUrl={item.imageUrl}
            giftQty={item.giftQty}
          />
        ))}
      </div>
    </>
  );
};
export default CartContent;
