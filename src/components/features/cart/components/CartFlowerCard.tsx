import { removeItem } from "@/redux/slices/CartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";

const CartFlowerCard = ({
  id,
  name,
  size,
  price,
  imageUrl,
}: {
  id: string;
  name: string;
  size: string;
  price: number;
  imageUrl: string;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row gap-4 border-b border-gray-200 pb-5">
      <Image src={imageUrl} alt={name} width={150} height={150} />
      <div className="flex w-full flex-row items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold">{name}</span>
          <span className="text-gray-500">{size}</span>
          <span className="text-lg font-semibold">
            ${size == "premium" ? (price + 20).toFixed(2) : price.toFixed(2)}
          </span>
        </div>
        <span
          className="cursor-pointer underline"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </span>
      </div>
    </div>
  );
};
export default CartFlowerCard;
