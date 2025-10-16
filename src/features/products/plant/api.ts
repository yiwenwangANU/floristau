import { GetPlantResponse, GetPlantsResponse } from "@/libs/types/plants";

export const fetchPlant = async (params: {
  Page?: number;
  PageSize?: number;
  PlantType?: string;
  MinPrice?: number;
  MaxPrice?: number;
  SearchTerm?: string;
  Sort?: string;
}): Promise<GetPlantsResponse> => {
  try {
    // Build query string
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((v) => query.append(key, String(v)));
        } else {
          query.append(key, String(value));
        }
      }
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/Public/Plant/getPlants?${query.toString()}`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch plants: ${res.statusText}`);
    }

    const data: GetPlantsResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch flowers:", error);
    throw error;
  }
};

export const fetchPlantById = async (id: number): Promise<GetPlantResponse> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/Public/Plant/getPlantById/${id}`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch plant: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch plant:", error);
    throw error;
  }
};
