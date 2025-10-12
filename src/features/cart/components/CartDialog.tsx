"use client";
import Link from "next/link";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";

import ErrorPage from "@/app/error";
import Loading from "@/app/loading";
import Button from "@/components/ui/Button";

import { useCartContext } from "@/contexts/CartContext";
import CartContent from "@/features/cart/components/CartContent";
import CartManageGift from "@/features/cart/components/CartManageGift";
import useGetWine from "@/legacy/reactQuery/useGetWine";
import useGetChocolate from "@/legacy/reactQuery/useGetChocolate";
import useGetTeddy from "@/legacy/reactQuery/useGetTeddys";
import CartSubtotal from "@/features/cart/components/CartSubtotal";

const CartDialog = () => {
  const { cartOpen, cartGiftPage, handleOpenChange, handleCartClose } =
    useCartContext();
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
        <Dialog.Content className="fixed top-1/2 left-1/2 max-h-3/4 w-1/3 -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-white p-[25px]">
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
              <Link href={"/checkout"}>
                <Button
                  variant="confirmGifts"
                  className="mx-auto"
                  onClick={handleCartClose}
                >
                  Check Out
                </Button>
              </Link>
            </>
          )}

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="h-[20px] cursor-pointer px-[15px] font-medium text-gray-700 underline hover:text-black">
                Continue Shopping
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-violet7 absolute top-2.5 right-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
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
