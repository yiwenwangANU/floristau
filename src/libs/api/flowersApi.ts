import {
  CreateFlowerDto,
  CreateFlowerResponse,
  GetFlowerResponse,
  GetFlowersResponse,
  UploadImageResponse,
} from "../types/flowers";
import { handleApiError } from "./api-error-handler";
import axiosPublic from "./axiosPublic";

export const flowersApi = {
  getFlowers: async (): Promise<GetFlowersResponse> => {
    try {
      const response = await axiosPublic.get<GetFlowersResponse>(
        "/api/Public/Flower/getFlowers",
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to fetch flowers.");
    }
  },
  fetchFlower: async (params: {
    Page?: number;
    PageSize?: number;
    ProductType?: string;
    Color?: string;
    Occasion?: string;
    FlowerTypeIds?: number[];
    MinPrice?: number;
    MaxPrice?: number;
    SearchTerm?: string;
    Sort?: string;
  }): Promise<GetFlowersResponse> => {
    try {
      const response = await axiosPublic.get<GetFlowersResponse>(
        "/api/Public/Flower/getFlowers",
        { params },
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to fetch flowers.");
    }
  },
  getFlowerById: async (id: number): Promise<GetFlowerResponse> => {
    try {
      const response = await axiosPublic.get<GetFlowerResponse>(
        `/api/Public/Flower/getFlowerById/${id}`,
      );
      return response.data; // Assuming API returns array with one flower
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
        formData,
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to upload image.");
    }
  },

  createFlower: async (
    flower: CreateFlowerDto,
  ): Promise<CreateFlowerResponse> => {
    try {
      const response = await axiosPublic.post<CreateFlowerResponse>(
        "/api/admin/Flower/createFlower",
        flower,
      );
      return response.data;
    } catch (error) {
      handleApiError(error, "Failed to create flower.");
    }
  },
};
