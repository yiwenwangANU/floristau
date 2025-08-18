import {
  CreateFlowerDto,
  CreateFlowerResponse,
  GetFlowersResponse,
  UploadImageResponse,
} from "../types/flowers";
import { handleApiError } from "./api-error-handler";
import axiosPublic from "./axiosPublic";

export const flowersApi = {
  getFlowers: async (): Promise<GetFlowersResponse> => {
    try {
      const response = await axiosPublic.get<GetFlowersResponse>(
        "/api/Flower/getFlowers"
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to fetch flowers.");
    }
  },
  getFlowerById: async (id: number): Promise<GetFlowersResponse[number]> => {
    try {
      const response = await axiosPublic.get<GetFlowersResponse>(
        `/api/Flower/getFlowerById/${id}`
      );
      return response.data[0]; // Assuming API returns array with one flower
    } catch (error) {
      handleApiError(error, `Failed to fetch flower with ID ${id}.`);
    }
  },

  uploadImage: async (image: File): Promise<UploadImageResponse> => {
    try {
      const formData = new FormData();
      if (image) {
        formData.append("file", image);
      }
      const response = await axiosPublic.post<UploadImageResponse>(
        "/api/File/uploadImage",
        formData
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to upload image.");
    }
  },

  createFlower: async (
    flower: CreateFlowerDto
  ): Promise<CreateFlowerResponse> => {
    try {
      const response = await axiosPublic.post<CreateFlowerResponse>(
        "/api/Flower/createFlower",
        flower
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to create flower.");
    }
  },
};
