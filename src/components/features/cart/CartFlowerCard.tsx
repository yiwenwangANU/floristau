import { removeItem } from "@/redux/CartSlice";
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
  );
};
export default CartFlowerCard;
