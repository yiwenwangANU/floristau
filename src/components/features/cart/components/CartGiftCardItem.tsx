"use client";
import NumberStepper from "@/components/form/NumberStepper";
import { removeGift, updateGiftQty } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";

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
      })
    );
  };
  return (
    <div
      key={item.name}
      className="text-sm flex flex-row items-center justify-between w-full pb-2"
    >
      <div className="flex flex-col py-2">
        <span className="text-lg font-semibold">{item.name}</span>
        <span
          className="underline cursor-pointer"
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
              })
            )
          }
        />
        <span className="text-lg font-semibold w-10">
          ${item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartGiftCardItem;
