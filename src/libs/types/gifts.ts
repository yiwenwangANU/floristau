export type GiftFormValues = {
  giftQty: Record<string, number>;
};
export type GetGiftsResponse = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}[];
