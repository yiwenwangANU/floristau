import { GetGiftsResponse } from "@/libs/types/gifts";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const useCartManageGift = ({
  cartId,
  wineData,
  chocolateData,
  teddyData,
}: {
  cartId: string | null;
  wineData: GetGiftsResponse;
  chocolateData: GetGiftsResponse;
  teddyData: GetGiftsResponse;
}) => {
  type GiftType = "wine" | "chocolate" | "teddy";

  const items = useSelector((s: RootState) => s.cart.cartState.items);
  const cartItem = items.find((i) => i.id === cartId);

  const categories: {
    type: GiftType;
    label: string;
    data: GetGiftsResponse;
  }[] = [
    { type: "wine", label: "Add Wine", data: wineData },
    { type: "chocolate", label: "Add Chocolate", data: chocolateData },
    { type: "teddy", label: "Add Teddy Bear", data: teddyData },
  ];

  const getCurrentQty = (type: GiftType, name: string) => {
    if (!cartItem) return 0;
    const arr = cartItem.giftQty[type] ?? [];
    const found = arr.find((g) => g.name === name);
    return found?.qty ?? 0;
  };

  return { cartItem, getCurrentQty, categories };
};
export default useCartManageGift;
