import { Roboto } from "next/font/google";
import { fetchPlantById } from "../api";

const roboto = Roboto({ weight: "400", subsets: ["latin"], style: "normal" });
const PlantDetail = async ({ id }: { id: string }) => {
  const data = await fetchPlantById(Number(id));
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

export default PlantDetail;
