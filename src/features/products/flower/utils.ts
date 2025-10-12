import { GetFlowersResponse } from "@/libs/types/flowers";

export const fetchFlower = async (params: {
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
      `${process.env.NEXT_PUBLIC_API_URL}/api/Public/Flower/getFlowers?${query.toString()}`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch flowers: ${res.statusText}`);
    }

    const data: GetFlowersResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch flowers:", error);
    throw error;
  }
};
