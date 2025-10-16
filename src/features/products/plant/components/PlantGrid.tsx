import ProductCard from "@/features/products/shared/components/ProductCard";
import { fetchPlant } from "../api";

const PlantGrid = async () => {
  const data = await fetchPlant({ PageSize: 8 });
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
