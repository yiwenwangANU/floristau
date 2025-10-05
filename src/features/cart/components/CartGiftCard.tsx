import { GiftQty } from "@/libs/types/gifts";
import Button from "@/components/ui/Button";
import { useCartContext } from "@/features/cart/contexts/CartContext";
import CartGiftCardItem from "@/features/cart/components/CartGiftCardItem";

const CartGiftCard = ({
  cartId,
  giftQty,
}: {
  cartId: string;
  giftQty: GiftQty;
}) => {
  const { handleGiftOpen } = useCartContext();
  const giftFlat = [...giftQty.wine, ...giftQty.chocolate, ...giftQty.teddy];

  return (
    <div className="flex flex-col items-start">
      <div className="flex w-full flex-col gap-2">
        {giftFlat.length > 0 && (
          <span className="text-2xl font-semibold">Gifts</span>
        )}
        {giftFlat.map((item) => (
          <CartGiftCardItem key={item.name} cartId={cartId} item={item} />
        ))}
      </div>

      <Button
        variant="manageGifts"
        onClick={() => handleGiftOpen({ id: cartId })}
      >
        Manage Gifts
      </Button>
    </div>
  );
};
export default CartGiftCard;
