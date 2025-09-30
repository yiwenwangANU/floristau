import { useAppSelector } from "@/redux/hooks";
import { selectCartSubtotal } from "@/redux/selectors/CartSelector";

const useGetCartSubtotal = () => {
  return useAppSelector(selectCartSubtotal);
};
export default useGetCartSubtotal;
