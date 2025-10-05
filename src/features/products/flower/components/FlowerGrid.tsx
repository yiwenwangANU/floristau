"use client";
// import AddNewFlower from "@/components/ui/AddNewFlower";
import ProductCard from "@/features/products/shared/components/ProductCard";
import useFetchFlowers from "@/features/products/flower/hooks/useFetchFlowers";

const FlowerGrid = () => {
  const { data, isLoading, error } = useFetchFlowers();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex flex-row flex-wrap items-center gap-8">
      {/* <AddNewFlower /> */}
      {data?.map((flower) => (
        <ProductCard
          key={flower.id}
          id={flower.id}
          type="flowers"
          title={flower.name}
          price={`$${flower.price}`}
          image={flower.imageUrl}
        />
      ))}
    </div>
  );
};
export default FlowerGrid;
