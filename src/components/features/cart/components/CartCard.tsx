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
    <div className="mb-4 flex flex-col gap-4 rounded border border-gray-200 p-4">
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
