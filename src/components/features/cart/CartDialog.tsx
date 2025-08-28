import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const CartDialog = ({
  open,
  onOpenChange,
  title,
  onClick,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  onClick: () => void;
}) => {
  const items = useSelector((state: RootState) => state.cart.cartState.items);
  console.log(items);
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className="px-4 cursor-pointer w-full py-3 my-10 overflow-hidden bg-stone-300 font-medium tracking-wide hover:bg-stone-400"
      >
        {title}
      </button>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed bg-white left-1/2 top-1/2 max-w-1/3 max-h-3/4 -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] overflow-y-auto">
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
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none">
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CartDialog;
