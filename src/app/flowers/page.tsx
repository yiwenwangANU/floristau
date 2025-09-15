"use client";
import Filter from "@/components/features/filter&sort/Filter";
import AddNewFlower from "@/components/ui/AddNewFlower";
import Card from "@/components/ui/Card";
import useGetFlowers from "@/hooks/useGetFlowers";

const Flowers = () => {
  const { data, isLoading, error } = useGetFlowers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex flex-col min-h-screen py-5 px-1 sm:px-8 gap-3">
      <Filter name="Color" catalog={["Red", "Blue", "Green"]} />
      <div className="flex flex-row flex-wrap gap-8 items-center">
        {/* <AddNewFlower /> */}
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
