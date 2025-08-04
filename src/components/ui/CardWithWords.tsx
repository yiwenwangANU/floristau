import Image from "next/image";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

type CardWithWordsProps = {
  title: string;
  content: string;
  image: string;
  color: keyof typeof colorMap;
};

const colorMap: Record<string, string> = {
  red: "bg-red-800",
  cyan: "bg-cyan-800",
  blue: "bg-blue-800",
  green: "bg-green-800",
  yellow: "bg-yellow-800",
  purple: "bg-purple-800",
  pink: "bg-pink-700",
};

const CardWithWords = ({
  title,
  content,
  image,
  color,
}: CardWithWordsProps) => {
  return (
    <div className="border rounded-md overflow-hidden grid xl:grid-cols-[.75fr_1fr] grid-rows-[.15fr_1fr] lg:w-[30%] md:w-[40%] sm:w-[85%] h-full max-h-80 xl:hover:cursor-auto hover:cursor-pointer">
      <div className={`${colorMap[color]} min-w-0 h-full`}>
        <div className="p-4 flex xl:flex-col flex-row justify-between h-full">
          <h3
            className={
              "xl:pt-6 xl:text-4xl text-2xl xl:font-semibold font-medium text-white"
            }
          >
            {title}
          </h3>
          <p className={"p-2 text-white text-xl hidden xl:block"}>{content}</p>
          <ArrowRight className="text-white block xl:hidden" />
          <Button variant="secondary" className="w-fit m-2 hidden xl:block">
            Shop Now
          </Button>
        </div>
      </div>
      <Image
        src={image}
        alt={title}
        width={500}
        height={600}
        className="object-cover h-full"
      />
    </div>
  );
};

export default CardWithWords;
