import { GiftQty } from "@/libs/types/gifts";
import Button from "@/components/ui/Button";
const CartGiftCard = ({ giftQty }: { giftQty: GiftQty }) => {
  return (
    <div className="flex flex-col items-start">
      {giftQty.length > 0 && (
        <div className="flex flex-col gap-2 w-full">
          <span className="text-2xl font-semibold">Gifts</span>
          {giftQty.map((item) => (
            <div
              key={item.name}
              className="text-sm flex flex-row items-center justify-between w-full"
            >
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{item.name}</span>
                <span className="underline cursor-pointer">Remove</span>
              </div>
              <div className="flex flex-row gap-5">
                <span className="font-bold">* {item.qty}</span>
                <span className="text-lg font-semibold">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      <Button variant="manageGifts">Manage Gifts</Button>
    </div>
  );
};
export default CartGiftCard;
