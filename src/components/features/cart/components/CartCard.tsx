import { GiftQty } from "@/libs/types/gifts";
import CartFlowerCard from "./CartFlowerCard";
import CartGiftCard from "./CartGiftCard";

const CartCard = ({
  id,
  name,
  size,
  price,
  imageUrl,
  giftQty,
}: {
  id: string;
  name: string;
  size: string;
  price: number;
  imageUrl: string;
  giftQty: GiftQty;
}) => {
  return (
    <div className="flex flex-col gap-4 mb-4 border rounded p-4 border-gray-200">
      <CartFlowerCard
        id={id}
        name={name}
        size={size}
        price={price}
        imageUrl={imageUrl}
      />
      <CartGiftCard cartId={id} giftQty={giftQty} />
    </div>
  );
};

export default CartCard;
