import { FlowerFormValues } from "@/libs/types/forms";
import { Control, Controller } from "react-hook-form";

const SizeSelect = ({
  control,
  price,
}: {
  control: Control<FlowerFormValues>;
  price: number;
}) => {
  return (
    <Controller
      name="size"
      control={control}
      render={({ field }) => (
        <div className="flex flex-col py-10">
          <h2 className="h-12 text-xl">Choose Size</h2>
          <div className="flex flex-row items-center gap-4">
            <label className="inline-block w-1/2 cursor-pointer">
              <input
                name="size"
                type="radio"
                value="standard"
                checked={field.value === "standard"}
                onChange={() => field.onChange("standard")}
                className="peer sr-only"
              />
              <div className="flex h-20 flex-col items-center justify-center rounded border-2 border-gray-200 font-medium peer-checked:border-black">
                <div>Standard</div>
                <span className="font-medium">${price}.00</span>
              </div>
            </label>
            <label className="inline-block w-1/2 cursor-pointer">
              <input
                name="size"
                type="radio"
                value="premium"
                checked={field.value === "premium"}
                onChange={() => field.onChange("premium")}
                className="peer sr-only"
              />
              <div className="flex h-20 flex-col items-center justify-center rounded border-2 border-gray-200 font-medium peer-checked:border-black">
                <div>Premium</div>
                <span className="font-medium">${price + 20}.00</span>
              </div>
            </label>
          </div>
        </div>
      )}
    />
  );
};

export default SizeSelect;
