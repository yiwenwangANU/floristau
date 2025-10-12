import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { checkoutApi } from "@/legacy/axios/api/checkoutApi";
import { StripePayRequest } from "@/libs/types/checkout";

const useCheckout = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (request: StripePayRequest) => {
      const response = await checkoutApi.checkout(request);
      return response;
    },
    onSuccess: (url) => {
      router.push(url);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useCheckout;
