import { StripePayRequest } from "../types/checkout";
import { handleApiError } from "./api-error-handler";
import axiosPublic from "./axiosPublic";

export const checkoutApi = {
  checkout: async (request: StripePayRequest): Promise<string> => {
    try {
      const response = await axiosPublic.post<string>("/pay", request);
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to checkout.");
    }
  },
};
