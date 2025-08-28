import { FlowerFormValues } from "@/libs/types/forms";
import { Control, Controller } from "react-hook-form";

const NumberStepper = ({
  control,
  index,
}: {
  control: Control<FlowerFormValues>;
  index: number;
}) => {
  return (
    <Controller
      name={`giftQty.${index}.qty`}
      control={control}
      defaultValue={0}
      render={({ field }) => (
        <div className="flex items-center border border-gray-300 aspect-square w-10 hover:border-black">
          <span className="text-center p-2">{field.value}</span>
          <div className="flex flex-col">
            <button
              className="cursor-pointer font-semibold text-[9px]"
              onClick={(e) => {
                e.preventDefault();
                field.onChange(field.value + 1);
              }}
            >
              ▲
            </button>
            <button
              className="cursor-pointer font-semibold text-[9px] disabled:text-gray-400"
              onClick={(e) => {
                e.preventDefault();
                field.onChange(field.value - 1);
              }}
              disabled={field.value <= 0}
            >
              ▼
            </button>
          </div>
        </div>
      )}
    />
  );
};
export default NumberStepper;
