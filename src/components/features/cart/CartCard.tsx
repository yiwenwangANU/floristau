import { useAppDispatch } from "@/redux/hooks";
import { removeItem } from "@/redux/CartSlice";
import Image from "next/image";

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
  giftQty: Record<string, number>;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex flex-row gap-4 border rounded p-4 border-gray-200">
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
      <div className="flex items-center">
        {Object.entries(giftQty).map(([key, value]) => (
          <span key={key} className="text-sm">
            {value}x {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CartCard;
