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
      render={({ field }) => (
        <div className="flex flex-col relative">
          <label className="text-xl h-12">Delivery Date</label>
          <DatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            className="p-5 block w-full border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
            placeholderText="Select delivery date"
            minDate={addDays(new Date(), 1)}
          />
          <Calendar
            className="absolute right-7 top-20 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={20}
          />
        </div>
      )}
    />
  );
};

export default DeliveryDate;
