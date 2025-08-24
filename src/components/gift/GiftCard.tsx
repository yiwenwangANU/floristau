import Image from "next/image";
const GiftCard = ({
  name,
  imageUrl,
  price,
}: {
  name: string;
  imageUrl: string;
  price: number;
}) => {
  return (
    <div className="border p-4 rounded flex flex-row justify-between items-center my-2">
      <Image src={imageUrl} alt={name} width={40} height={40} />
      <h2 className="text-lg font-bold">{name}</h2>

      <p className="text-lg font-bold">${price}</p>
    </div>
  );
};
export default GiftCard;
