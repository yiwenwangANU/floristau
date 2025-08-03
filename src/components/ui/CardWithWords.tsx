import Button from "./Button";

type CardWithWordsProps = {
  title: string;
  content: string;
  image: string;
  color: keyof typeof colorMap;
};

const colorMap: Record<string, string> = {
  red: "bg-red-600",
  blue: "bg-blue-500",
  green: "bg-green-500",
};

const CardWithWords = ({
  title,
  content,
  image,
  color,
}: CardWithWordsProps) => {
  return (
    <div className="border rounded-md overflow-hidden grid grid-cols-[.75fr_1fr] w-full max-w-xl">
      <div className={`${colorMap[color]} min-w-0`}>
        <div className="p-4 flex flex-col justify-between h-full">
          <h3 className={`pt-6 text-5xl font-semibold text-white`}>{title}</h3>
          <p className={`p-2 text-white text-xl`}>{content}</p>
          <Button variant="secondary" className="w-fit m-2">
            Shop Now
          </Button>
        </div>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default CardWithWords;
