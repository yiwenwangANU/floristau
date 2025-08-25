export type FlowerFormValues = {
  size: "standard" | "premium";
  giftQty: Record<string, number>;
  message: string;
  flowerId: number;
  postcode: string;
  deliveryDate: Date | null;
};
