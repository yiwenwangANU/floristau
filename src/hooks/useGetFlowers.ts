import { flowersApi } from "@/libs/api/flowersApi";
import { useQuery } from "@tanstack/react-query";

const useFlowers = () => {
  return useQuery({
    queryKey: ["getFlowers"],
    queryFn: () => flowersApi.getFlowers(),
  });
};

export default useFlowers;
