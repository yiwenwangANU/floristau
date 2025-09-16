import { FlowerFormValues } from "@/libs/types/forms";
import { addDays } from "date-fns";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import { Control, Controller } from "react-hook-form";

const DeliveryDate = ({ control }: { control: Control<FlowerFormValues> }) => {
  return (
    <Controller
      name="deliveryDate"
      control={control}
      rules={{ required: "Delivery date is required" }}
      render={({ field, fieldState }) => (
        <div className="relative flex flex-col">
          <label className="h-12 text-xl">Delivery Date</label>
          <DatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            className="block w-full rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
            placeholderText="Select delivery date"
            minDate={addDays(new Date(), 1)}
          />
          <Calendar
            className="pointer-events-none absolute top-20 right-7 -translate-y-1/2 text-gray-400"
            size={20}
          />
          {fieldState.error && (
            <p className="mt-1 text-sm text-red-500">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default DeliveryDate;
