import {
  FILTER_OPTIONS,
  FILTER_OPTIONS_MULTI,
  SORTS_OPTIONS,
} from "../FilterOptions";
import Filter from "./Filter";
import FilterMulti from "./FilterMulti";
const FilterRow = () => {
  return (
    <div className="flex flex-row gap-5">
      {FILTER_OPTIONS.map((fo) => (
        <Filter key={fo.option} name={fo.option} catalog={fo.filterValues} />
      ))}
      {FILTER_OPTIONS_MULTI.map((fo) => (
        <FilterMulti
          key={fo.option}
          name={fo.option}
          catalog={fo.filterValues}
        />
      ))}
      {SORTS_OPTIONS.map((so) => (
        <Filter key={so.option} name={so.option} catalog={so.filterValues} />
      ))}
    </div>
  );
};
export default FilterRow;
