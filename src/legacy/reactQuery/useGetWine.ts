import { wineApi } from "@/legacy/axios/api/wineApi";
import { useQuery } from "@tanstack/react-query";

const useGetWine = () => {
  return useQuery({
    queryKey: ["getWine"],
    queryFn: () => wineApi.getWine(),
  });
};

export default useGetWine;
