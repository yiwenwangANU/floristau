"use client";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";

import CartContent from "./CartContent";
import { useCartContext } from "@/contexts/CartContext";
import CartManageGift from "./CartManageGift";
import ErrorPage from "@/app/error";
import Loading from "@/app/loading";
import useGetWine from "@/hooks/useGetWine";
import useGetChocolate from "@/hooks/useGetChocolate";
import useGetTeddy from "@/hooks/useGetTeddys";
import Button from "@/components/ui/Button";
import CartSubtotal from "./CartSubtotal";
const CartDialog = () => {
  const { cartOpen, cartGiftPage, handleOpenChange } = useCartContext();
  const {
    data: wineData,
    isPending: wineIsPending,
    isError: wineIsError,
  } = useGetWine();
  const {
    data: chocolateData,
    isPending: chocolateIsPending,
    isError: chocolateError,
  } = useGetChocolate();
  const {
    data: teddyData,
    isPending: teddyIsPending,
    isError: teddyError,
  } = useGetTeddy();

  if (wineIsPending || chocolateIsPending || teddyIsPending) return <Loading />;
  if (
    wineIsError ||
    !wineData ||
    !chocolateData ||
    chocolateError ||
    !teddyData ||
    teddyError
  )
    return <ErrorPage />;

  return (
    <Dialog.Root open={cartOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed bg-white left-1/2 top-1/2 w-1/3 max-h-3/4 -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] overflow-y-auto">
          {cartGiftPage ? (
            <CartManageGift
              wineData={wineData}
              chocolateData={chocolateData}
              teddyData={teddyData}
            />
          ) : (
            <>
              <CartContent />

              <CartSubtotal />
              <Button variant="confirmGifts" className="mx-auto">
                Check Out
              </Button>
            </>
          )}

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="h-[20px] px-[15px] underline font-medium cursor-pointer text-gray-700 hover:text-black">
                Continue Shopping
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
