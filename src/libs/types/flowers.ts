export type GetFlowersResponse = {
  id: number;
  name: string;
  price: number;
  discount?: number;
  description?: string;
  available: boolean;
  imageUrl: string;
}[];
