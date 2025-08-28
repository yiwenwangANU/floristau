import { useAppDispatch } from "@/redux/hooks";
import { removeItem } from "@/redux/CartSlice";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { GiftQty } from "@/libs/types/gifts";

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
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-4 mb-4 border rounded p-4 border-gray-200">
      <div className="flex flex-row gap-4 pb-5 border-b border-gray-200">
        <Image src={imageUrl} alt={name} width={150} height={150} />
        <div className="flex flex-row items-start justify-between gap-4 w-full">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">{name}</span>
            <span className="text-gray-500">{size}</span>
            <span className="text-lg font-semibold">${price.toFixed(2)}</span>
          </div>
          <span
            className="underline cursor-pointer"
            onClick={() => dispatch(removeItem(id))}
          >
            Remove
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start">
        {giftQty.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-semibold">Gifts</span>
            {giftQty.map((item) => (
              <div key={item.name} className="text-sm flex flex-row">
                <span className="font-semibold">{item.name}</span>
              </div>
            ))}
          </div>
        )}
        <Button variant="manageGifts">Manage Gifts</Button>
      </div>
    </div>
  );
};

export default CartCard;
