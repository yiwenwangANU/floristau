export type GetGiftsResponse = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}[];

export type GiftQtyItem = { name: string; qty: number; price: number };
export type GiftQty = {
  wine: GiftQtyItem[];
  chocolate: GiftQtyItem[];
  teddy: GiftQtyItem[];
};
