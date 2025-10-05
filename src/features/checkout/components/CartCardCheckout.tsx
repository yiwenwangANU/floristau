import { GiftQty } from "@/libs/types/gifts";
import CartFlowerCardCheckout from "@/features/checkout/components/CartFlowerCardCheckout";
import CartGiftCardCheckout from "@/features/checkout/components/CartGiftCardCheckout";

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
    <div className="mb-4 flex flex-col gap-4 rounded border border-gray-200 p-4">
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
