import FilterIndicator from "@/components/features/filter&sort/components/FilterIndicatorRow";
import FilterRowPlant from "@/components/features/filter&sort/components/FilterRowPlant";
import PlantGrid from "@/components/features/products/PlantGrid";

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
