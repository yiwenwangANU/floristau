"use client";
import AddNewFlower from "@/components/ui/AddNewFlower";
import Card from "@/components/ui/Card";
import useFlowers from "@/hooks/useGetFlowers";

const Flowers = () => {
  const { data, isLoading, error } = useFlowers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-2xl sm:text-4xl pt-20 pb-2 px-1 sm:px-8 font-sans font-medium">
        Our Best Selling Flowers
      </div>
      <div className="flex flex-row flex-wrap gap-8 py-5 px-1 sm:px-8 items-center">
        <AddNewFlower />
        {data?.map((flower) => (
          <Card
            key={flower.id}
            id={flower.id}
            title={flower.name}
            price={`$${flower.price}`}
            image={flower.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
export default Flowers;
