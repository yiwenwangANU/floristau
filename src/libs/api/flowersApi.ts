import {
  CreateFlowerDto,
  CreateFlowerResponse,
  GetFlowersResponse,
} from "../types/flowers";
import axiosPublic from "./axiosPublic";

export const flowersApi = {
  getFlowers: async (): Promise<GetFlowersResponse> => {
    const response = await axiosPublic.get<GetFlowersResponse>(
      "/api/Flower/getFlowers"
    );
    return response.data;
  },
  getFlowerById: async (id: number): Promise<GetFlowersResponse[number]> => {
    const response = await axiosPublic.get<GetFlowersResponse>(
      `/api/Flower/getFlowerById/${id}`
    );
    return response.data[0]; // Assuming the API returns an array with one flower
  },
  uploadImage: async (image: File): Promise<string> => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    const response = await axiosPublic.post<string>(
      "/api/File/uploadImage",
      formData
    );
    return response.data;
  },
  createFlower: async (
    flower: CreateFlowerDto
  ): Promise<CreateFlowerResponse> => {
    const response = await axiosPublic.post<CreateFlowerResponse>(
      "/api/Flower/createFlower",
      flower
    );
    return response.data;
  },
};
