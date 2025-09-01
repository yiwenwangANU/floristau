import { GiftQty } from "./gifts";

export type FlowerFormValues = {
  size: "standard" | "premium";
  giftQty: GiftQty;
  flowerId: number;
  postcode: string;
  deliveryDate: Date | null;
  message: string | null;
};

export type RecipientFormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  message: string | null;
  deliveryInstructions: string | null;
};
