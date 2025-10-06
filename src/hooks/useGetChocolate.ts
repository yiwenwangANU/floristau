import { chocolateApi } from "@/libs/api/chocolateApi";
import { useQuery } from "@tanstack/react-query";

const useGetChocolate = () => {
  return useQuery({
    queryKey: ["getChocolate"],
    queryFn: () => chocolateApi.getChocolate(),
  });
};

export default useGetChocolate;
