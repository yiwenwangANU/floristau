import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionComponent";
import * as Accordion from "@radix-ui/react-accordion";
import { GetGiftsResponse } from "@/libs/types/gifts";
import GiftCard from "@/components/gift/GiftCard";

const GiftSelect = ({ wineData }: { wineData: GetGiftsResponse }) => {
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
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s unstyled by default, giving you freedom over the look
          and feel.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
};

export default GiftSelect;
