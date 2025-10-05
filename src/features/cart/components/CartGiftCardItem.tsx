"use client";
import { useDispatch } from "react-redux";
import { removeGift, updateGiftQty } from "@/redux/slices/CartSlice";
import NumberStepper from "@/features/cart/components/NumberStepper";

const CartGiftCardItem = ({
  cartId,
  item,
}: {
  cartId: string;
  item: {
    name: string;
    qty: number;
    price: number;
    type: "wine" | "chocolate" | "teddy";
  };
}) => {
  const dispatch = useDispatch();
  const onRemoveGift = (type: "wine" | "chocolate" | "teddy", name: string) => {
    dispatch(
      removeGift({
        id: cartId,
        type,
        giftName: name,
      }),
    );
  };
  return (
    <div
      key={item.name}
      className="flex w-full flex-row items-center justify-between pb-2 text-sm"
    >
      <div className="flex flex-col py-2">
        <span className="text-lg font-semibold">{item.name}</span>
        <span
          className="cursor-pointer underline"
          onClick={() => onRemoveGift(item.type, item.name)}
        >
          Remove
        </span>
      </div>
      <div className="flex flex-row items-center gap-6 px-2">
        <NumberStepper
          value={item.qty}
          onChange={(qty) =>
            dispatch(
              updateGiftQty({
                id: cartId,
                type: item.type,
                giftName: item.name,
                giftQty: qty,
                giftPrice: item.price,
              }),
            )
          }
        />
        <span className="w-10 text-lg font-semibold">
          ${item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartGiftCardItem;
