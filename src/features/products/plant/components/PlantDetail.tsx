import ErrorPage from "@/app/error";
import Loading from "@/app/loading";
import { Roboto } from "next/font/google";
import useGetPlantById from "@/features/products/plant/hooks/useGetPlantById";

const roboto = Roboto({ weight: "400", subsets: ["latin"], style: "normal" });
const PlantDetail = ({ id }: { id: string }) => {
  const { data, isPending, isError } = useGetPlantById(Number(id));
  if (isPending) return <Loading />;
  if (isError || !data) return <ErrorPage />;
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
