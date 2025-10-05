import { useQuery } from "@tanstack/react-query";
import { flowersApi } from "@/libs/api/flowersApi";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const PAGE_SIZE = 12;

const useFetchFlowers = () => {
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
        PageSize: Number(paramsObj.PageSize ?? PAGE_SIZE),
        ...paramsObj,
      }),
  });
};

export default useFetchFlowers;
