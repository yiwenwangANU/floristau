import Image from "next/image";

const CartFlowerCardCheckout = ({
  name,
  size,
  price,
  imageUrl,
}: {
  name: string;
  size: string;
  price: number;
  imageUrl: string;
}) => {
  return (
    <div className="flex flex-row gap-4 pb-5 border-b border-gray-200">
      <Image src={imageUrl} alt={name} width={150} height={150} />
      <div className="flex flex-row items-start justify-between gap-4 w-full">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold">{name}</span>
          <span className="text-gray-500">{size}</span>
          <span className="text-lg font-semibold">
            ${size == "premium" ? (price + 20).toFixed(2) : price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartFlowerCardCheckout;
