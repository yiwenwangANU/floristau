"use client";
import Filter from "@/components/features/filter&sort/components/Filter";
import FilterIndicator from "@/components/features/filter&sort/components/FilterIndicatorRow";
import FilterRow from "@/components/features/filter&sort/components/FilterRow";
import AddNewFlower from "@/components/ui/AddNewFlower";
import Card from "@/components/ui/Card";
import useGetFlowers from "@/hooks/useGetFlowers";

const Flowers = () => {
  const { data, isLoading, error } = useGetFlowers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex min-h-screen flex-col gap-3 px-1 py-5 sm:px-8">
      <FilterRow />
      <FilterIndicator />
      <div className="flex flex-row flex-wrap items-center gap-8">
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
