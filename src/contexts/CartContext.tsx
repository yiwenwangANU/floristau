"use client";

import { createContext, useState, useContext } from "react";

type CartContextType = {
  cartOpen: boolean;
  cartGiftPage: boolean;
  cartId: string | null;
  handleCartOpen: () => void;
  handleCartClose: () => void;
  handleGiftOpen: ({ id }: { id: string }) => void;
  handleGiftClose: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartGiftPage, setCartGiftPage] = useState(false);
  const [cartId, setCartId] = useState<string | null>(null);
  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };
  const handleGiftOpen = ({ id }: { id: string }) => {
    setCartId(id);
    setCartGiftPage(true);
  };
  const handleGiftClose = () => {
    setCartId(null);
    setCartGiftPage(false);
  };
  return (
    <CartContext.Provider
      value={{
        cartOpen,
        cartGiftPage,
        cartId,
        handleCartOpen,
        handleCartClose,
        handleGiftOpen,
        handleGiftClose,
      }}
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
