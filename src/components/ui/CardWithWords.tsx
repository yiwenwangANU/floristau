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
    <div className="grid h-full max-h-80 grid-rows-[.15fr_1fr] overflow-hidden rounded-md border hover:cursor-pointer sm:w-[85%] md:w-[40%] lg:w-[30%] xl:grid-cols-[.75fr_1fr] xl:hover:cursor-auto">
      <div className={`${colorMap[color]} h-full min-w-0`}>
        <div className="flex h-full flex-row justify-between p-4 xl:flex-col">
          <h3
            className={
              "text-2xl font-medium text-white xl:pt-6 xl:text-4xl xl:font-semibold"
            }
          >
            {title}
          </h3>
          <p className={"hidden p-2 text-xl text-white xl:block"}>{content}</p>
          <ArrowRight className="block text-white xl:hidden" />
          <Button variant="secondary" className="m-2 hidden w-fit xl:block">
            Shop Now
          </Button>
        </div>
      </div>
      <Image
        src={image}
        alt={title}
        width={500}
        height={600}
        className="h-full object-cover"
      />
    </div>
  );
};

export default CardWithWords;
