import { filterMultiData } from "../FilterOptions";

const useGetFlowerTypeById = () => {
  const filterValue = filterMultiData.find(
    (filter) => filter.filterLabel == "flowerType",
  )?.filterValue;
  const getFlowerTypeById = (name: string, value: string) => {
    let filter;
    if (name == "flowerType") {
      filter = filterValue?.find((r) => r.value == value)?.label;
    } else filter = value;
    return filter;
  };
  return { getFlowerTypeById };
};
export default useGetFlowerTypeById;
