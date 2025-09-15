import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionComponent";
import { Accordion } from "radix-ui";

const Filter = ({ name, catalog }: { name: string; catalog: string[] }) => {
  return (
    <Accordion.Root
      className="w-32 bg-stone-200 hover:outline-2 hover:outline-black px-3 py-2 hover:cursor-pointer"
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{name}</AccordionTrigger>
        <AccordionContent>
          {catalog.map((item) => (
            <div key={item}>
              <input type="checkbox" id={item} name={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
};
export default Filter;
