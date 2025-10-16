import FlowerImage from "@/features/products/flower/components/FlowerImage";
import FlowerDetail from "@/features/products/flower/components/FlowerDetail";
import FlowerForm from "@/features/products/productForm/FlowerForm";
import { fetchFlowerById } from "@/features/products/flower/api";
import { fetchChocolate, fetchTeddy, fetchWine } from "@/libs/api/gifts";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const flowerData = await fetchFlowerById(Number(id));
  const wineData = await fetchWine();
  const chocolateData = await fetchChocolate();
  const teddyData = await fetchTeddy();
  return (
    <div className="flex min-h-screen flex-row gap-12 px-2 pt-12 pb-2 sm:px-8">
      <FlowerImage id={id} />
      <div className="flex w-4/5 flex-col gap-5 px-5 py-15">
        <FlowerDetail id={id} />
        <FlowerForm
          id={id}
          flowerData={flowerData}
          wineData={wineData}
          chocolateData={chocolateData}
          teddyData={teddyData}
        />
      </div>
    </div>
  );
}
