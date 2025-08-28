import { GiftQty } from "./gifts";

export type FlowerFormValues = {
  size: "standard" | "premium";
  giftQty: GiftQty;
  flowerId: number;
  postcode: string;
  deliveryDate: Date | null;
  message: string | null;
};
