import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"], style: "normal" });
const ProductDetail = ({
  name,
  description,
}: {
  name: string;
  description: string | undefined;
}) => {
  return (
    <>
      <div className="font-mono text-5xl tracking-wide">{name}</div>
      <div
        className={`text-lg tracking-wide text-gray-600 ${roboto.className}`}
      >
        {description}
      </div>
    </>
  );
};

export default ProductDetail;
