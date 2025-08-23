import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionComponent";
import * as Accordion from "@radix-ui/react-accordion";

const GiftSelect = () => {
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
          Yes. It adheres to the WAI-ARIA design pattern.
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
