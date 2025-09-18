"use client";
import { Cross2Icon } from "@radix-ui/react-icons";
import useRemoveFilter from "../hooks/useRemoveFilter";
const FilterIndicator = ({ name, value }: { name: string; value: string }) => {
  const { removeFilter } = useRemoveFilter();
  return (
    <div
      className="flex flex-row items-center justify-between gap-3"
      onClick={() => removeFilter(name, value)}
    >
      <div className="text-sm capitalize">{value}</div>
      <Cross2Icon />
    </div>
  );
};
export default FilterIndicator;
