"use client";

import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import NumberStepper from "@/components/form/NumberStepper";
import { updateGiftQty } from "@/redux/slices/CartSlice";
import { GetGiftsResponse } from "@/libs/types/gifts";
import ErrorPage from "@/app/error";
import { useCartContext } from "@/contexts/CartContext";
import Button from "@/components/ui/Button";
import useCartManageGift from "../hooks/useCartManageGift";
import { useDispatch } from "react-redux";

export default function CartManageGift({
  wineData,
  chocolateData,
  teddyData,
}: {
  wineData: GetGiftsResponse;
  chocolateData: GetGiftsResponse;
  teddyData: GetGiftsResponse;
}) {
  const { cartId, handleGiftClose } = useCartContext();
  const dispatch = useDispatch();
  const { cartItem, getCurrentQty, categories } = useCartManageGift({
    cartId,
    wineData,
    chocolateData,
    teddyData,
  });
  if (!cartItem || !cartId) return <ErrorPage />;

  // helper: get current qty from Redux for a given gift name within a category

  return (
    <>
      <Accordion.Root type="single" defaultValue="item-wine" collapsible>
        {categories.map(({ label, type, data }) => (
          <Accordion.Item key={type} value={`item-${type}`}>
            <Accordion.Trigger className="pt-5 pb-6 text-xl font-semibold capitalize">
              {label}
            </Accordion.Trigger>
            <Accordion.Content>
              {data.map((g) => {
                const qty = getCurrentQty(type, g.name);
                return (
                  <div
                    key={`${type}-${g.id}`}
                    className="my-2 flex flex-row items-center justify-between rounded border p-4"
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
                            }),
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
