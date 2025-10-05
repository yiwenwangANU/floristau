import { GiftQty } from "@/libs/types/gifts";

const CartGiftCardCheckout = ({ giftQty }: { giftQty: GiftQty }) => {
  const giftFlat = [...giftQty.wine, ...giftQty.chocolate, ...giftQty.teddy];
  return (
    <div className="flex flex-col items-start">
      <div className="flex w-full flex-col gap-2">
        {giftFlat.length > 0 && (
          <span className="text-2xl font-semibold">Gifts</span>
        )}
        {giftFlat.map((item) => (
          <div
            key={item.name}
            className="flex w-full flex-row items-center justify-between pb-2 text-sm"
          >
            <div className="flex flex-col py-2">
              <span className="text-lg font-semibold">{item.name}</span>
            </div>
            <div className="flex flex-row items-center gap-6 px-2">
              <span className="font-medium">QTY: {item.qty}</span>
              <span className="text-lg font-semibold">
                ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CartGiftCardCheckout;
