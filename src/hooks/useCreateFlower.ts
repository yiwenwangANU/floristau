import { flowersApi } from "@/libs/api/flowersApi";
import { NewFlower } from "@/libs/types/flowers";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateFlower = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (flower: NewFlower) => {
      let imageUrl = "";
      const file = flower.imageFile?.[0];
      if (file) {
        const up = await flowersApi.uploadImage(file);
        imageUrl = up;
      }
      const payload = {
        name: flower.name,
        description: flower.description,
        imageUrl,
        price: flower.price,
        productType: flower.productType,
        occasion: flower.occasion,
        color: flower.color,
        flowers: flower.flowers,
        isPopular: flower.isPopular,
        discount: flower.discount ?? 0,
      };
      const response = await flowersApi.createFlower(payload);
      return response;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getFlowers"] });
    },
  });
};

export default useCreateFlower;
