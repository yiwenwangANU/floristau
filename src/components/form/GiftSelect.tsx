import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionComponent";
import * as Accordion from "@radix-ui/react-accordion";
import { FlowerFormValues } from "@/libs/types/forms";
import { GetGiftsResponse } from "@/libs/types/gifts";
import GiftCard from "@/components/form/GiftCard";
import { Control } from "react-hook-form";

const GiftSelect = ({
  wineData,
  chocolateData,
  teddyData,
  control,
}: {
  wineData: GetGiftsResponse;
  chocolateData: GetGiftsResponse;
  teddyData: GetGiftsResponse;
  control: Control<FlowerFormValues>;
}) => {
  type GiftType = "wine" | "chocolate" | "teddy";
  const categories: {
    type: GiftType;
    label: string;
    data: GetGiftsResponse;
  }[] = [
    { type: "wine", label: "Add Wine", data: wineData },
    { type: "chocolate", label: "Add Chocolate", data: chocolateData },
    { type: "teddy", label: "Add Teddy Bear", data: teddyData },
  ];
  return (
    <Accordion.Root
      className=""
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {categories.map(({ label, type, data }) => (
        <AccordionItem key={type} value={`item-${type}`}>
          <AccordionTrigger className="pt-5 pb-10 text-xl capitalize">
            {label}
          </AccordionTrigger>
          <AccordionContent>
            {data.map((item, i) => (
              <GiftCard
                key={item.id}
                index={i}
                type={type}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                control={control}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion.Root>
  );
};

export default GiftSelect;
