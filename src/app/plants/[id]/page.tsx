import Image from "next/image";

import PlantDetail from "@/features/products/plant/components/PlantDetail";
import PlantForm from "@/features/products/productForm/PlantForm";
import { fetchPlantById } from "@/features/products/plant/api";
import { fetchChocolate, fetchTeddy, fetchWine } from "@/libs/api/gifts";

export default async function PlantPageClient({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const plantData = await fetchPlantById(Number(id));
  const wineData = await fetchWine();
  const chocolateData = await fetchChocolate();
  const teddyData = await fetchTeddy();

  return (
    <div className="flex min-h-screen flex-row gap-12 px-2 pt-12 pb-2 sm:px-8">
      <div className="w-4/5 px-5 py-15">
        <Image
          src={plantData.imageUrl}
          alt={plantData.name}
          width={900}
          height={900}
          priority
          className="h-auto w-auto"
        />
        <p className="p-2">The Image pictured is a Premium product.</p>
        <p className="p-2 tracking-wide">
          <strong>Disclaimer:</strong> Each arrangement is handcrafted with the
          freshest seasonal flowers. Images are examples only; colours and
          varieties may vary based on availability.
        </p>
      </div>

      <div className="flex w-4/5 flex-col gap-5 px-5 py-15">
        <PlantDetail id={id} />
        <PlantForm
          id={id}
          plantData={plantData}
          wineData={wineData}
          chocolateData={chocolateData}
          teddyData={teddyData}
        />
      </div>
    </div>
  );
}
