import ProductCard from "@/features/products/shared/components/ProductCard";
import { fetchFlower } from "@/features/products/flower/api";

const FlowerGrid = async () => {
  const data = await fetchFlower({ PageSize: 8 });
  return (
    <div className="flex flex-row flex-wrap items-center gap-8">
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
