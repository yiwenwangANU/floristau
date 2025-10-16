import { plantsApi } from "@/legacy/axios/api/plantsApi";
import { useQuery } from "@tanstack/react-query";

const useGetPlantById = (id: number) => {
  return useQuery({
    queryKey: ["getPlantById", id],
    queryFn: () => plantsApi.getPlantById(id),
  });
};

export default useGetPlantById;
