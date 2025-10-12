import { teddyApi } from "@/legacy/axios/api/teddyApi";
import { useQuery } from "@tanstack/react-query";

const useGetTeddy = () => {
  return useQuery({
    queryKey: ["getTeddy"],
    queryFn: () => teddyApi.getTeddy(),
  });
};

export default useGetTeddy;
