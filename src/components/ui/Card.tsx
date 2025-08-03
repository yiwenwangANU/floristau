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
    <div className="group border rounded-md overflow-hidden hover:cursor-pointer">
      <div className="relative">
        <Image src={image} alt={title} width={300} height={200} />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-200"></div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{price}</p>
          {discount && <p className="text-red-500">{discount}</p>}
        </div>
        <Button variant="secondary" className="m-4">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Card;
