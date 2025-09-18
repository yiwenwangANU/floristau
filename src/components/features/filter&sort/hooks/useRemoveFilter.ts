"use client";
import { useSearchParams } from "next/navigation";

const useRemoveFilter = () => {
  const searchParams = useSearchParams();

  const removeFilter = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name, value);
    return params.toString();
  };
  return { removeFilter };
};
export default useRemoveFilter;
