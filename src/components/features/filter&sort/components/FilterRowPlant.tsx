import { FILTER_OPTIONS_PLANT, SORTS_OPTIONS } from "../FilterOptions";
import Filter from "./Filter";
const FilterRowPlant = () => {
  return (
    <div className="flex flex-row gap-5">
      {FILTER_OPTIONS_PLANT.map((fo) => (
        <Filter key={fo.option} name={fo.option} catalog={fo.filterValues} />
      ))}
      {SORTS_OPTIONS.map((so) => (
        <Filter key={so.option} name={so.option} catalog={so.filterValues} />
      ))}
    </div>
  );
};
export default FilterRowPlant;
