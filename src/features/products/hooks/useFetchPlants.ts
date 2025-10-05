import { plantsApi } from "@/libs/api/plantsApi";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const PAZE_SIZE = 12;

const useFetchPlants = () => {
  const searchParams = useSearchParams();
  const signature = searchParams.toString();
  const paramsObj = useMemo(
    () => Object.fromEntries(searchParams),
    [searchParams],
  );
  return useQuery({
    queryKey: ["getPlants", signature],
    queryFn: () =>
      plantsApi.fetchPlant({
        Page: Number(paramsObj.Page ?? 1),
        PageSize: Number(paramsObj.PageSize ?? PAZE_SIZE),
        ...paramsObj,
      }),
  });
};

export default useFetchPlants;
