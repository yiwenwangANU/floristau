import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"], style: "normal" });
const FlowerDetail = ({
  name,
  description,
}: {
  name: string;
  description: string | undefined;
}) => {
  return (
    <>
      <div className="text-5xl font-mono tracking-wide">{name}</div>
      <div
        className={`text-gray-600 text-lg tracking-wide ${roboto.className}`}
      >
        {description}
      </div>
    </>
  );
};

export default FlowerDetail;
