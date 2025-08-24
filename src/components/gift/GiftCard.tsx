import Image from "next/image";
import { Control, Controller } from "react-hook-form";
import NumberStepper from "@/components/ui/NumberStepper";
import { GiftFormValues } from "@/libs/types/gifts";

const GiftCard = ({
  name,
  imageUrl,
  price,
  control,
}: {
  name: string;
  imageUrl: string;
  price: number;
  control: Control<GiftFormValues>;
}) => {
  return (
    <div className="border p-4 rounded flex flex-row justify-between items-center my-2">
      <Image src={imageUrl} alt={name} width={40} height={40} />
      <h2 className="text-lg font-bold">{name}</h2>
      <div className="flex flex-row items-center gap-4">
        <p className="text-lg font-bold">${price}</p>
        <Controller
          name={`giftQty.${name}`}
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <NumberStepper value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
    </div>
  );
};
export default GiftCard;
