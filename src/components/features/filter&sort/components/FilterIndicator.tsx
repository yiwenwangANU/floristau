"use client";
import { Cross2Icon } from "@radix-ui/react-icons";
import useRemoveFilter from "../hooks/useRemoveFilter";
import { filterMultiData } from "../SearchParams";

const FilterIndicator = ({ name, value }: { name: string; value: string }) => {
  let filter;
  const filterValue = filterMultiData.find(
    (filter) => filter.filterLabel == "flowerType",
  )?.filterValue;
  if (name == "flowerType") {
    filter = filterValue?.find((r) => r.value == value)?.label;
  } else filter = value;
  const { removeFilter } = useRemoveFilter();
  return (
    <div
      className="flex flex-row items-center justify-between gap-3"
      onClick={() => removeFilter(name, value)}
    >
      <div className="text-sm capitalize">{filter}</div>
      <Cross2Icon />
    </div>
  );
};
export default FilterIndicator;
