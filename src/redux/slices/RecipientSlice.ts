import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  RecipientMode,
  RecipientState,
  RecipientUpdate,
} from "@/libs/types/customerInfo";

const initialState: RecipientState = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  suburb: "",
  postcode: "",
  cardMessage: "",
  deliveryInstructions: "",
  mode: "init",
};

export const recipientSlice = createSlice({
  name: "recipient",
  initialState,
  reducers: {
    updateRecipient: (state, action: PayloadAction<RecipientUpdate>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.suburb = action.payload.suburb;
      state.postcode = action.payload.postcode;
      state.cardMessage = action.payload.cardMessage;
      state.deliveryInstructions = action.payload.deliveryInstructions;
    },

    clearRecipient: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.phone = "";
      state.address = "";
      state.suburb = "";
      state.postcode = "";
      state.cardMessage = "";
      state.deliveryInstructions = "";
    },
    setRecipientMode: (state, action: PayloadAction<RecipientMode>) => {
      state.mode = action.payload;
    },
    toggleRecipientMode: (state) => {
      state.mode = state.mode === "form" ? "info" : "form";
    },
  },
});

export const {
  updateRecipient,
  clearRecipient,
  setRecipientMode,
  toggleRecipientMode,
} = recipientSlice.actions;
export default recipientSlice.reducer;
