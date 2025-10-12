import { Roboto } from "next/font/google";
import { fetchFlowerById } from "../api";

const roboto = Roboto({ weight: "400", subsets: ["latin"], style: "normal" });
const FlowerDetail = async ({ id }: { id: string }) => {
  const data = await fetchFlowerById(Number(id));
  return (
    <>
      <div className="font-mono text-5xl tracking-wide">{data.name}</div>
      <div
        className={`text-lg tracking-wide text-gray-600 ${roboto.className}`}
      >
        {data.description}
      </div>
    </>
  );
};

export default FlowerDetail;
