import { ProductFormValues } from "@/libs/types/forms";
import { Control, Controller } from "react-hook-form";

const DeliveryPost = ({ control }: { control: Control<ProductFormValues> }) => {
  return (
    <Controller
      name="postcode"
      control={control}
      rules={{
        required: "Postcode is required",
        pattern: {
          value: /^[0-9]{4}$/,
          message: "Enter a valid 4-digit postcode",
        },
      }}
      render={({ field, fieldState }) => (
        <div className="flex flex-col py-10">
          <label className="h-12 text-xl">Postcode</label>
          <input
            type="text"
            placeholder="Enter delivery postcode"
            {...field}
            className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
          {fieldState.error && (
            <span className="mt-2 text-sm text-red-600">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default DeliveryPost;
