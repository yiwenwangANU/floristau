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
  return (
    <Accordion.Root
      className=""
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl pt-5 pb-10">
          Add Wine
        </AccordionTrigger>
        <AccordionContent>
          {wineData.map((wine) => (
            <GiftCard
              key={wine.id}
              name={wine.name}
              imageUrl={wine.imageUrl}
              price={wine.price}
              control={control}
            />
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl pt-5 pb-10">
          Add Chocolate
        </AccordionTrigger>
        <AccordionContent>
          {chocolateData.map((chocolate) => (
            <GiftCard
              key={chocolate.id}
              name={chocolate.name}
              imageUrl={chocolate.imageUrl}
              price={chocolate.price}
              control={control}
            />
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl pt-5 pb-10">
          Add Teddy Bear
        </AccordionTrigger>
        <AccordionContent>
          {teddyData.map((teddy) => (
            <GiftCard
              key={teddy.id}
              name={teddy.name}
              imageUrl={teddy.imageUrl}
              price={teddy.price}
              control={control}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
};

export default GiftSelect;
