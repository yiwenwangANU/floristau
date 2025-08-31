export type SenderState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  mode: "form" | "info";
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
  postcode: string;
};
