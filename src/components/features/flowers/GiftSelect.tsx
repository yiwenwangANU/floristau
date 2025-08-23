import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionComponent";
import * as Accordion from "@radix-ui/react-accordion";
import { GetGiftsResponse } from "@/libs/types/gifts";
import GiftCard from "@/components/gift/GiftCard";

const GiftSelect = ({
  wineData,
  chocolateData,
  teddyData,
}: {
  wineData: GetGiftsResponse;
  chocolateData: GetGiftsResponse;
  teddyData: GetGiftsResponse;
}) => {
  return (
    <Accordion.Root
      className="rounded-md shadow-[0_2px_10px] shadow-black/5"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl h-14">Add Wine</AccordionTrigger>
        <AccordionContent>
          {wineData.map((wine) => (
            <GiftCard
              key={wine.id}
              name={wine.name}
              imageUrl={wine.imageUrl}
              price={wine.price}
            />
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Add Chocolate</AccordionTrigger>
        <AccordionContent>
          {chocolateData.map((chocolate) => (
            <GiftCard
              key={chocolate.id}
              name={chocolate.name}
              imageUrl={chocolate.imageUrl}
              price={chocolate.price}
            />
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Add Teddy Bear</AccordionTrigger>
        <AccordionContent>
          {teddyData.map((teddy) => (
            <GiftCard
              key={teddy.id}
              name={teddy.name}
              imageUrl={teddy.imageUrl}
              price={teddy.price}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
};

export default GiftSelect;
