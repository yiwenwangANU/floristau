"use client";

import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import NumberStepper from "@/components/form/NumberStepper";

import { useDispatch, useSelector } from "react-redux";
import { updateGiftQty } from "@/redux/CartSlice";
import { RootState } from "@/redux/store";
import { GetGiftsResponse } from "@/libs/types/gifts";
import ErrorPage from "@/app/error";
import { useCartContext } from "@/contexts/CartContext";
import Button from "@/components/ui/Button";

type GiftType = "wine" | "chocolate" | "teddy";

export default function CartManageGift({
  wineData,
  chocolateData,
  teddyData,
}: {
  wineData: GetGiftsResponse;
  chocolateData: GetGiftsResponse;
  teddyData: GetGiftsResponse;
}) {
  const dispatch = useDispatch();
  const items = useSelector((s: RootState) => s.cart.cartState.items);
  const { cartId, handleGiftClose } = useCartContext();
  const cartItem = items.find((i) => i.id === cartId);
  if (!cartItem || !cartId) return <ErrorPage />;
  const categories: {
    type: GiftType;
    label: string;
    data: GetGiftsResponse;
  }[] = [
    { type: "wine", label: "Add Wine", data: wineData },
    { type: "chocolate", label: "Add Chocolate", data: chocolateData },
    { type: "teddy", label: "Add Teddy Bear", data: teddyData },
  ];

  // helper: get current qty from Redux for a given gift name within a category
  const getCurrentQty = (type: GiftType, name: string) => {
    const arr = cartItem.giftQty[type] ?? [];
    const found = arr.find((g) => g.name === name);
    return found?.qty ?? 0;
  };

  return (
    <>
      <Accordion.Root type="single" defaultValue="item-wine" collapsible>
        {categories.map(({ label, type, data }) => (
          <Accordion.Item key={type} value={`item-${type}`}>
            <Accordion.Trigger className="text-xl pt-5 pb-6 capitalize font-semibold">
              {label}
            </Accordion.Trigger>
            <Accordion.Content>
              {data.map((g) => {
                const qty = getCurrentQty(type, g.name);
                return (
                  <div
                    key={`${type}-${g.id}`}
                    className="border p-4 rounded flex flex-row justify-between items-center my-2"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={g.imageUrl}
                        alt={g.name}
                        width={48}
                        height={48}
                      />
                      <h2 className="text-lg font-bold">{g.name}</h2>
                    </div>

                    <div className="flex flex-row items-center gap-6">
                      <span className="text-lg font-semibold">
                        ${g.price.toFixed(2)}
                      </span>

                      <NumberStepper
                        value={qty}
                        onChange={(nextQty) =>
                          dispatch(
                            updateGiftQty({
                              id: cartId,
                              type: type,
                              giftName: g.name,
                              giftQty: nextQty,
                              giftPrice: g.price,
                            })
                          )
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </Accordion.Content>
          </Accordion.Item>
        ))}
        <Button variant="confirmGifts" onClick={handleGiftClose}>
          Confirm
        </Button>
      </Accordion.Root>
    </>
  );
}
