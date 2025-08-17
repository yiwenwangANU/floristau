export type NewFlower = {
  name: string;
  description: string;
  imageFile?: FileList;
  price: number;
  productType: string;
  occasion: string;
  color: string;
  flowers: number[];
  isPopular: boolean;
  discount: number;
};
export type CreateFlowerDto = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  productType: string;
  occasion: string;
  color: string;
  flowers: number[];
  isPopular: boolean;
  discount: number;
};
export type CreateFlowerResponse = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  productType: string;
  occasion: string;
  color: string;
  flowers: number[];
  isPopular: boolean;
  discount: number;
};

export type UploadImageResponse = {
  url: string;
};

export type GetFlowersResponse = {
  id: number;
  name: string;
  price: number;
  discount?: number;
  description?: string;
  available: boolean;
  imageUrl: string;
}[];
