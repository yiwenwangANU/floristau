import { GetGiftsResponse } from "../types/gifts";

export const fetchWine = async (): Promise<GetGiftsResponse> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/wine`,
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch wine: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch wine:", error);
    throw error;
  }
};

export const fetchChocolate = async (): Promise<GetGiftsResponse> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/chocolate`,
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch chocolate: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch chocolate:", error);
    throw error;
  }
};

export const fetchTeddy = async (): Promise<GetGiftsResponse> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/teddy`,
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch teddy: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch teddy:", error);
    throw error;
  }
};
