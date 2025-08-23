import { Jost, Roboto } from "next/font/google";

const jost = Jost({ weight: "500", subsets: ["latin"], style: "italic" });
const roboto = Roboto({ weight: "400", subsets: ["latin"], style: "normal" });
const FlowerDetail = ({
  name,
  description,
  price,
}: {
  name: string;
  description: string | undefined;
  price: number;
}) => {
  return (
    <>
      <div className="text-5xl font-mono tracking-wide">{name}</div>

      <div className={`text-3xl font-bold ${jost.className}`}>AUD ${price}</div>

      <div
        className={`text-gray-600 text-lg tracking-wide ${roboto.className}`}
      >
        {description}
      </div>
    </>
  );
};

export default FlowerDetail;
