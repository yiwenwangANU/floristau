import { flowersApi } from "@/libs/api/flowersApi";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const PAZE_SIZE = 12;

const useGetFlowersBySearchParams = () => {
  const searchParams = useSearchParams();
  const signature = searchParams.toString();
  const paramsObj = useMemo(
    () => Object.fromEntries(searchParams),
    [searchParams],
  );
  return useQuery({
    queryKey: ["getFlowers", signature],
    queryFn: () =>
      flowersApi.fetchFlower({
        FlowerTypeIds: searchParams.getAll("flowerType").map(Number),
        Page: Number(paramsObj.Page ?? 1),
        PageSize: Number(paramsObj.PageSize ?? PAZE_SIZE),
        ...paramsObj,
      }),
  });
};

export default useGetFlowersBySearchParams;
