import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SenderMode,
  SenderState,
  SenderUpdate,
} from "@/libs/types/customerInfo";

const initialState: SenderState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  mode: "form",
};

export const senderSlice = createSlice({
  name: "sender",
  initialState,
  reducers: {
    updateSender: (state, action: PayloadAction<SenderUpdate>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },

    clearSender: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.phone = "";
      state.email = "";
    },
    setSenderMode: (state, action: PayloadAction<SenderMode>) => {
      state.mode = action.payload;
    },
    toggleSenderMode: (state) => {
      state.mode = state.mode === "form" ? "info" : "form";
    },
  },
});

export const { updateSender, clearSender, setSenderMode, toggleSenderMode } =
  senderSlice.actions;
export default senderSlice.reducer;
