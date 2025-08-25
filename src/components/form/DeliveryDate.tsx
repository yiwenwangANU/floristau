import { FlowerFormValues } from "@/libs/types/forms";
import DatePicker from "react-datepicker";
import { Control, Controller } from "react-hook-form";

const DeliveryDate = ({ control }: { control: Control<FlowerFormValues> }) => {
  return (
    <Controller
      name="deliveryDate"
      control={control}
      render={({ field }) => (
        <DatePicker
          selected={field.value}
          onChange={(date) => field.onChange(date)}
        />
      )}
    />
  );
};

export default DeliveryDate;
