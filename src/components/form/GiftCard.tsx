import Image from "next/image";
import { Control } from "react-hook-form";
import NumberStepper from "@/components/form/NumberStepper";
import { FlowerFormValues } from "@/libs/types/forms";

const GiftCard = ({
  name,
  imageUrl,
  price,
  control,
}: {
  name: string;
  imageUrl: string;
  price: number;
  control: Control<FlowerFormValues>;
}) => {
  return (
    <div className="border p-4 rounded flex flex-row justify-between items-center my-2">
      <Image src={imageUrl} alt={name} width={40} height={40} />
      <h2 className="text-lg font-bold">{name}</h2>
      <div className="flex flex-row items-center gap-4">
        <p className="text-lg font-bold">${price}</p>
        <NumberStepper control={control} giftKey={`giftQty.${name}`} />
      </div>
    </div>
  );
};
export default GiftCard;
