export type StripePayRequest = {
  Items: { PriceId: string; Quantity: number }[];
};
