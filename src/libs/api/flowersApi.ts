import { GetFlowersResponse } from "../types/flowers";
import axiosPublic from "./axiosPublic";

export const flowersApi = {
  getFlowers: async (): Promise<GetFlowersResponse> => {
    const response = await axiosPublic.get<GetFlowersResponse>(
      "/api/Flowers/getFlowers"
    );
    return response.data;
  },
  getFlowerById: async (id: number): Promise<GetFlowersResponse[number]> => {
    const response = await axiosPublic.get<GetFlowersResponse>(
      `/api/Flowers/getFlowerById/${id}`
    );
    return response.data[0]; // Assuming the API returns an array with one flower
  },
};
