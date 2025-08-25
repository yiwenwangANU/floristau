export type FlowerFormValues = {
  size: "standard" | "premium";
  giftQty: Record<string, number>;
  flowerId: number;
  postcode: string;
  deliveryDate: Date | null;
};
