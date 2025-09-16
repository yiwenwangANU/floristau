import { handleApiError } from "./api-error-handler";
import axiosPublic from "./axiosPublic";
import { GetGiftsResponse } from "../types/gifts";
export const teddyApi = {
  getTeddy: async (): Promise<GetGiftsResponse> => {
    try {
      const response =
        await axiosPublic.get<GetGiftsResponse>("/api/public/teddy");
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to fetch teddy.");
    }
  },
};
