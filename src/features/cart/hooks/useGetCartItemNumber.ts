import { useAppSelector } from "@/redux/hooks";

const useGetCartItemNumber = (): number => {
  return useAppSelector((s) => s.cart.cartState.items.length);
};
export default useGetCartItemNumber;
