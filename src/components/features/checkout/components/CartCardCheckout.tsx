import { GiftQty } from "@/libs/types/gifts";
import CartFlowerCardCheckout from "./CartFlowerCardCheckout";
import CartGiftCardCheckout from "./CartGiftCardCheckout";

const CartCardCheckout = ({
  name,
  size,
  price,
  imageUrl,
  giftQty,
}: {
  name: string;
  size: string;
  price: number;
  imageUrl: string;
  giftQty: GiftQty;
}) => {
  return (
    <div className="flex flex-col gap-4 mb-4 border rounded p-4 border-gray-200">
      <CartFlowerCardCheckout
        name={name}
        size={size}
        price={price}
        imageUrl={imageUrl}
      />
      <CartGiftCardCheckout giftQty={giftQty} />
    </div>
  );
};

export default CartCardCheckout;
