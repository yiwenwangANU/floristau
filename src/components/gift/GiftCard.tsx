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
    <div className="border p-4 rounded">
      <h2 className="text-lg font-bold">{name}</h2>
      <Image src={imageUrl} alt={name} width={40} height={40} />
      <p className="text-gray-600">Price: ${price}</p>
    </div>
  );
};
export default GiftCard;
