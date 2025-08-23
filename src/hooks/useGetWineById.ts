import { wineApi } from "@/libs/api/wineApi";
import { useQuery } from "@tanstack/react-query";

const useGetWineById = (id: number) => {
  return useQuery({
    queryKey: ["getWineById", id],
    queryFn: () => wineApi.getWineById(id),
  });
};

export default useGetWineById;
