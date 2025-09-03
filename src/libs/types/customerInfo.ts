export type SenderState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  mode: SenderMode;
};
export type SenderUpdate = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};
export type SenderMode = "form" | "info";

export type RecipientState = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  suburb: string;
  postcode: string;
  cardMessage: string;
  deliveryInstructions: string;
  mode: RecipientMode;
};

export type RecipientUpdate = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  suburb: string;
  postcode: string;
  cardMessage: string;
  deliveryInstructions: string;
};
export type RecipientMode = "form" | "info" | "init";
