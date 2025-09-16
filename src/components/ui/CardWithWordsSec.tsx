import { ArrowRight } from "lucide-react";
import Image from "next/image";

type CardWithWordsSecProps = {
  title: string;
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
  pink: "bg-pink-800",
  gray: "bg-gray-800",
};

const CardWithWordsSec = ({ title, image, color }: CardWithWordsSecProps) => {
  return (
    <div className="group relative grid h-full max-h-120 grid-rows-[1fr_.15fr] overflow-hidden rounded-md border hover:cursor-pointer">
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="object-cover"
      />
      <div className={`${colorMap[color]} min-w-0`}>
        <div className="flex h-full flex-row justify-between px-6 py-4">
          <h3 className={`text-2xl text-white`}>{title}</h3>
          <ArrowRight className="text-white" />
        </div>
      </div>
      <div className="absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/10"></div>
    </div>
  );
};

export default CardWithWordsSec;
