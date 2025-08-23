import { handleApiError } from "./api-error-handler";
import axiosPublic from "./axiosPublic";
import { GetGiftResponse, GetGiftsResponse } from "../types/gifts";
export const flowersApi = {
  getWine: async (): Promise<GetGiftsResponse> => {
    try {
      const response = await axiosPublic.get<GetGiftsResponse>(
        "/api/public/wine"
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to fetch flowers.");
    }
  },
  getWineById: async (id: number): Promise<GetGiftResponse> => {
    try {
      const response = await axiosPublic.get<GetGiftResponse>(
        `/api/public/wine/${id}`
      );
      return response.data; // Assuming API returns array with one flower
    } catch (error) {
      handleApiError(error, `Failed to fetch flower with ID ${id}.`);
    }
  },
};
