"use client";
import FilterIndicator from "@/components/features/filter&sort/components/FilterIndicatorRow";
import FilterRow from "@/components/features/filter&sort/components/FilterRow";
import FlowerGrid from "@/components/features/flowers/FlowerGrid";

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
