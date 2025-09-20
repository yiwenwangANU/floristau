import { filterData, filterMultiData } from "../FilterOptions";
import Filter from "./Filter";
import FilterMulti from "./FilterMulti";
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
        <FilterMulti
          key={filter.filterLabel}
          name={filter.filterLabel}
          catalog={filter.filterValue}
        />
      ))}
    </div>
  );
};
export default FilterRow;
