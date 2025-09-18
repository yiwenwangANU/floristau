"use client";

import { useSearchParams } from "next/navigation";
import FilterIndicator from "./FilterIndicator";

const FilterIndicatorRow = () => {
  const searchParams = useSearchParams();

  return (
    <div className="w-fit bg-stone-200 p-3 select-none hover:cursor-pointer hover:outline hover:outline-stone-300">
      {Array.from(searchParams.entries()).map(([key, value]) => (
        <div key={`${key}-${value}`}>
          <FilterIndicator name={key} value={value} />
        </div>
      ))}
    </div>
  );
};
export default FilterIndicatorRow;
