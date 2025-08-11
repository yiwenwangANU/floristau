import { flowersApi } from "@/libs/api/flowersApi";
import { NewFlower } from "@/libs/types/flowers";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateFlower = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (Flower: NewFlower) => flowersApi.createFlower(Flower),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getFlowers"] });
    },
  });
};

export default useCreateFlower;
