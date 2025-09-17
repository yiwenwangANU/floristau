import { filters } from "../SearchParams";
import Filter from "./Filter"
const FilterRow = () => {
  return (
    <div className="flex flex-row gap-2">{filters.map((filter) => {<Filter name={filter.}/>})}</div>
  );
};
export default FilterRow;
