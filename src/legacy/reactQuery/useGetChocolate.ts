import { chocolateApi } from "@/legacy/axios/api/chocolateApi";
import { useQuery } from "@tanstack/react-query";

const useGetChocolate = () => {
  return useQuery({
    queryKey: ["getChocolate"],
    queryFn: () => chocolateApi.getChocolate(),
  });
};

export default useGetChocolate;
