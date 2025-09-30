import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import senderReducer from "./slices/SenderSlice";
import recipientReducer from "./slices/RecipientSlice";

const PERSIST_KEY = "cart:v1";

function loadPreloadedState() {
  if (typeof window === "undefined") return undefined; // SSR guard
  try {
    const raw = localStorage.getItem(PERSIST_KEY);
    if (!raw) return undefined;
    const cart = JSON.parse(raw);
    return { cart }; // match reducer key
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sender: senderReducer,
    recipient: recipientReducer,
  },
  preloadedState: loadPreloadedState(),
});

// persist only the cart slice on the client
if (typeof window !== "undefined") {
  store.subscribe(() => {
    try {
      const state = store.getState();
      // if you stored Dates before, ensure they are strings/ISO
      localStorage.setItem(PERSIST_KEY, JSON.stringify(state.cart));
    } catch {}
  });
}
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
