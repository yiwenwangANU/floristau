import { GiftQty } from "@/libs/types/gifts";
import Button from "@/components/ui/Button";
import NumberStepper from "@/components/form/NumberStepper";
import { useDispatch } from "react-redux";
import { updateGiftQty, removeGift } from "@/redux/CartSlice";

const CartGiftCard = ({
  cartId,
  giftQty,
}: {
  cartId: string;
  giftQty: GiftQty;
}) => {
  const dispatch = useDispatch();
  const giftFlat = [...giftQty.wine, ...giftQty.chocolate, ...giftQty.teddy];
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
    <div className="flex flex-col items-start">
      <div className="flex flex-col gap-2 w-full">
        {giftFlat.length > 0 && (
          <span className="text-2xl font-semibold">Gifts</span>
        )}
        {giftFlat.map((item) => (
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
                    })
                  )
                }
              />
              <span className="text-lg font-semibold w-10">
                ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Button variant="manageGifts">Manage Gifts</Button>
    </div>
  );
};
export default CartGiftCard;
