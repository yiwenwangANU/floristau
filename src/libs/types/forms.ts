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
  suburb: string;
  postcode: string;
  cardMessage: string;
  deliveryInstructions: string;
};
