import { createContext, useState, Dispatch, SetStateAction } from "react";

type CartContextType = {
  gift: boolean;
  setGift: Dispatch<SetStateAction<boolean>>;
  handleGiftOpen: () => void;
  handleGiftClose: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

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
