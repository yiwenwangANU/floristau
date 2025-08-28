import { GiftQty } from "./gifts";

export type CartItem = {
  id: string;
  flowerId: number;
  name: string;
  price: number;
  qty: number;
  imageUrl: string;
  size: "standard" | "premium";
  giftQty: GiftQty;
  postcode: string;
  deliveryDateISO: string | null;
  message: string | null;
};

export type CartState = {
  cartState: { items: CartItem[] };
};
