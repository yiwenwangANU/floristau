import AddNewFlower from "@/components/ui/AddNewFlower";
import FlowerCard from "@/components/features/flowers/FlowerCard";
import useFetchFlowers from "@/hooks/useFetchFlowers";

const FlowerGrid = () => {
  const { data, isLoading, error } = useFetchFlowers();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex flex-row flex-wrap items-center gap-8">
      {/* <AddNewFlower /> */}
      {data?.map((flower) => (
        <FlowerCard
          key={flower.id}
          id={flower.id}
          title={flower.name}
          price={`$${flower.price}`}
          image={flower.imageUrl}
        />
      ))}
    </div>
  );
};
export default FlowerGrid;
