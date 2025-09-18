"use client";
import { Cross2Icon } from "@radix-ui/react-icons";
const FilterIndicator = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-3">
      <div className="text-sm capitalize">{value}</div>
      <Cross2Icon />
    </div>
  );
};
export default FilterIndicator;
