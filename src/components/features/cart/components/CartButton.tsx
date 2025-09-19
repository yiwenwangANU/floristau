"use client";
import { useCartContext } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  const { handleCartOpen } = useCartContext();
  return (
    <ShoppingCart
      className="h-6 w-6 cursor-pointer hover:text-green-800"
      onClick={handleCartOpen}
    />
  );
};
export default CartButton;
