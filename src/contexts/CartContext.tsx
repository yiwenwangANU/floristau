"use client";

import { createContext, useState, useContext } from "react";

type CartContextType = {
  gift: boolean;
  cartId: string | null;
  handleGiftOpen: ({ id }: { id: string }) => void;
  handleGiftClose: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [gift, setGift] = useState(false);
  const [cartId, setCartId] = useState<string | null>(null);
  const handleGiftOpen = ({ id }: { id: string }) => {
    setCartId(id);
    setGift(true);
  };
  const handleGiftClose = () => {
    setCartId(null);
    setGift(false);
  };
  return (
    <CartContext.Provider
      value={{ gift, cartId, handleGiftOpen, handleGiftClose }}
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
