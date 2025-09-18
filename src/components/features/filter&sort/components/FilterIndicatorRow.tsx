"use client";

import { useSearchParams } from "next/navigation";
import FilterIndicator from "./FilterIndicator";

const FilterIndicatorRow = () => {
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-row gap-4">
      {Array.from(searchParams.entries()).map(([key, value]) => (
        <div
          key={`${key}-${value}`}
          className="w-fit bg-stone-200 p-3 select-none hover:cursor-pointer hover:outline hover:outline-stone-300"
        >
          <FilterIndicator name={key} value={value} />
        </div>
      ))}
    </div>
  );
};
export default FilterIndicatorRow;
