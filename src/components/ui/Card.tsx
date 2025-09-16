import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

type CardProps = {
  id: number;
  title: string;
  price: string;
  image: string;
  discount?: string;
};

const Card = ({ id, title, price, image, discount }: CardProps) => {
  return (
    <Link
      href={`/flowers/${id}`}
      className="group overflow-hidden rounded-md border hover:cursor-pointer sm:w-[45%] md:w-[30%] lg:w-[23%]"
    >
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/10"></div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{price}</p>
          {discount && <p className="text-red-500">{discount}</p>}
        </div>
        <Button variant="secondary" className="m-4 hidden sm:block">
          Shop Now
        </Button>
      </div>
    </Link>
  );
};

export default Card;
