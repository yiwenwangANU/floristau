import { handleApiError } from "./api-error-handler";
import axiosPublic from "./axiosPublic";
import { GetGiftResponse, GetGiftsResponse } from "../types/gifts";
export const wineApi = {
  getWine: async (): Promise<GetGiftsResponse> => {
    try {
      const response = await axiosPublic.get<GetGiftsResponse>(
        "/api/public/wine"
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to fetch wine.");
    }
  },
  getWineById: async (id: number): Promise<GetGiftResponse> => {
    try {
      const response = await axiosPublic.get<GetGiftResponse>(
        `/api/public/wine/${id}`
      );
      return response.data; // Assuming API returns array with one wine
    } catch (error) {
      handleApiError(error, `Failed to fetch wine with ID ${id}.`);
    }
  },
};
