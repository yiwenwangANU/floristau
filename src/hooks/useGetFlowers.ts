import { flowersApi } from "@/libs/api/flowersApi";
import { useQuery } from "@tanstack/react-query";

const useGetFlowers = () => {
  return useQuery({
    queryKey: ["getFlowers"],
    queryFn: () => flowersApi.getFlowers(),
  });
};

export default useGetFlowers;
