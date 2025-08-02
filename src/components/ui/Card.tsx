import Image from "next/image";
import Button from "./Button";

type CardProps = {
  title: string;
  price: string;
  image: string;
  discount?: string;
};

const Card = ({ title, price, image, discount }: CardProps) => {
  return (
    <div className="border rounded-md overflow-hidden">
      <Image src={image} alt={title} width={300} height={200} />
      <div className="flex flex-row justify-between">
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{price}</p>
          {discount && <p className="text-red-500">{discount}</p>}
        </div>
        <Button variant="secondary" className="h-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
