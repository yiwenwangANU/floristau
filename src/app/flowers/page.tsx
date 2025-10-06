import FilterIndicator from "@/features/filter/components/FilterIndicatorRow";
import FilterRow from "@/features/filter/components/FilterRow";
import FlowerGrid from "@/features/products/flower/components/FlowerGrid";

const Flowers = () => {
  return (
    <div className="flex min-h-screen flex-col gap-3 px-1 py-5 sm:px-8">
      <FilterRow />
      <FilterIndicator />
      <FlowerGrid />
    </div>
  );
};
export default Flowers;
