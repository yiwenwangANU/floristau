import { filterData, filterMultiData } from "../SearchParams";
import Filter from "./Filter";
const FilterRow = () => {
  return (
    <div className="flex flex-row gap-5">
      {filterData.map((filter) => (
        <Filter
          key={filter.filterLabel}
          name={filter.filterLabel}
          catalog={filter.filterValue}
        />
      ))}
      {filterMultiData.map((filter) => (
        <Filter
          key={filter.filterLabel}
          name={filter.filterLabel}
          catalog={filter.filterValue}
        />
      ))}
    </div>
  );
};
export default FilterRow;
