"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type CartContextType = {
  gift: boolean;
  setGift: Dispatch<SetStateAction<boolean>>;
  handleGiftOpen: () => void;
  handleGiftClose: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [gift, setGift] = useState(false);
  const handleGiftOpen = () => setGift(true);
  const handleGiftClose = () => setGift(false);
  return (
    <CartContext.Provider
      value={{ gift, setGift, handleGiftOpen, handleGiftClose }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
