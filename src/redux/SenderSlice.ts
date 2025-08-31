import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SenderState } from "@/libs/types/customerInfo";

const initialState: SenderState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

export const senderSlice = createSlice({
  name: "sender",
  initialState,
  reducers: {
    updateSender: (state, action: PayloadAction<SenderState>) => {
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
  },
});

export const { updateSender, clearSender } = senderSlice.actions;
export default senderSlice.reducer;
