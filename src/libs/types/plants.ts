export type NewPlant = {
  name: string;
  description: string;
  imageFile?: FileList;
  price: number;
  plantType: string;
  discount: number;
};
export type CreatePlantDto = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  plantType: string;
  discount: number;
};
export type CreatePlantResponse = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  plantType: string;
  discount: number;
  stripePriceId: string;
  stripeProductId: string;
};

export type UploadImageResponse = {
  url: string;
};

export type GetPlantsResponse = {
  id: number;
  name: string;
  price: number;
  discount?: number;
  description?: string;
  available: boolean;
  imageUrl: string;
  stripePriceId: string;
  stripeProductId: string;
}[];

export type GetPlantResponse = {
  id: number;
  name: string;
  price: number;
  discount?: number;
  description?: string;
  available: boolean;
  imageUrl: string;
  stripePriceId: string;
  stripeProductId: string;
};
