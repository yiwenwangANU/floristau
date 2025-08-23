export type GetGiftResponse = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export type GetGiftsResponse = GetGiftResponse[];
