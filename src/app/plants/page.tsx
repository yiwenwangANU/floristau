import FilterIndicator from "@/features/filter/components/FilterIndicatorRow";
import FilterRowPlant from "@/features/filter/components/FilterRowPlant";
import PlantGrid from "@/features/products/components/PlantGrid";

const Plants = () => {
  return (
    <div className="flex min-h-screen flex-col gap-3 px-1 py-5 sm:px-8">
      <FilterRowPlant />
      <FilterIndicator />
      <PlantGrid />
    </div>
  );
};
export default Plants;
