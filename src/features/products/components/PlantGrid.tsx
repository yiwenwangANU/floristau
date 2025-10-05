"use client";
import ProductCard from "@/features/products/components/ProductCard";
import useFetchPlants from "@/features/products/hooks/useFetchPlants";

const PlantGrid = () => {
  const { data, isLoading, error } = useFetchPlants();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex flex-row flex-wrap items-center gap-8">
      {data?.map((plant) => (
        <ProductCard
          key={plant.id}
          id={plant.id}
          type="plants"
          title={plant.name}
          price={`$${plant.price}`}
          image={plant.imageUrl}
        />
      ))}
    </div>
  );
};
export default PlantGrid;
