import { flowersApi } from "@/libs/api/flowersApi";
import { NewFlower } from "@/libs/types/flowers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCreateFlower = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (flower: NewFlower) => {
      let imageUrl = "";
      const file = flower.imageFile?.[0];
      if (file) {
        const up = await flowersApi.uploadImage(file);
        imageUrl = up.url;
      }
      const payload = {
        name: flower.name,
        description: flower.description,
        imageUrl,
        price: flower.price,
        productType: flower.productType,
        occasion: flower.occasion,
        color: flower.color,
        FlowerTypeIds: flower.FlowerTypeIds,
        isPopular: flower.isPopular,
        discount: flower.discount ?? 0,
      };
      const response = await flowersApi.createFlower(payload);
      return response;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getFlowers"] });
      queryClient.refetchQueries({ queryKey: ["getFlowers"], type: "active" });
      toast.success("🦄 New flower created!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useCreateFlower;
