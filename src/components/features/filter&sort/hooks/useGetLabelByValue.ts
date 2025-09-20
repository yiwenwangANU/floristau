import { FILTER_OPTIONS } from "../FilterOptions";

const useGetLabelByValue = () => {
  const getLabelByValue = (name: string, value: string): string | undefined => {
    const filterValues = FILTER_OPTIONS.find(
      (filter) => filter.option == name,
    )?.filterValues;
    let label;
    if (filterValues) {
      label = filterValues.find((r) => r.value == value)?.label;
    }
    return label;
  };
  return { getLabelByValue };
};
export default useGetLabelByValue;
