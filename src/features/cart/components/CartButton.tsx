"use client";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCartContext } from "@/contexts/CartContext";
import useGetCartItemNumber from "@/features/cart/hooks/useGetCartItemNumber";

const CartButton = () => {
  const { handleCartOpen } = useCartContext();
  const itemNumber = useGetCartItemNumber();
  // render badge after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="relative">
      <ShoppingCart
        className="h-6 w-6 cursor-pointer text-gray-700 transition-colors hover:text-green-700"
        onClick={handleCartOpen}
      />
      {mounted && itemNumber > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-xs font-medium text-white shadow-md">
          {itemNumber}
        </span>
      )}
    </div>
  );
};
export default CartButton;
