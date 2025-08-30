"use client";
import { useCartContext } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  const { handleCartOpen } = useCartContext();
  return (
    <ShoppingCart className="w-6 h-6 cursor-pointer" onClick={handleCartOpen} />
  );
};
export default CartButton;
