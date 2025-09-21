import {
  CreatePlantDto,
  CreatePlantResponse,
  GetPlantResponse,
  GetPlantsResponse,
  UploadImageResponse,
} from "../types/plants";
import { handleApiError } from "./api-error-handler";
import axiosPublic from "./axiosPublic";

export const plantsApi = {
  fetchPlant: async (params: {
    Page?: number;
    PageSize?: number;
    PlantType?: string;
    MinPrice?: number;
    MaxPrice?: number;
    SearchTerm?: string;
    Sort?: string;
  }): Promise<GetPlantsResponse> => {
    try {
      const response = await axiosPublic.get<GetPlantsResponse>(
        "/api/Public/Plant/getPlants",
        { params },
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to fetch plants.");
    }
  },
  getPlantById: async (id: number): Promise<GetPlantResponse> => {
    try {
      const response = await axiosPublic.get<GetPlantResponse>(
        `/api/Public/Plant/getPlantById/${id}`,
      );
      return response.data; // Assuming API returns array with one Plant
    } catch (error) {
      handleApiError(error, `Failed to fetch plant with ID ${id}.`);
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
        formData,
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to upload image.");
    }
  },

  createPlant: async (
    plant: CreatePlantDto,
  ): Promise<CreatePlantResponse> => {
    try {
      const response = await axiosPublic.post<CreatePlantResponse>(
        "/api/admin/Plant/createPlant",
        plant,
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to create plant.");
    }
  },
};
