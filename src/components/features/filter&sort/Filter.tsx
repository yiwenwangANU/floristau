import { ChevronDown } from "lucide-react";
import { Popover } from "radix-ui";
import { useState } from "react";
export default function FlowerTypeFilter({
  name,
  catalog,
}: {
  name: string;
  catalog: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        asChild
        className="w-32 hover:outline-2 hover:outline-black"
      >
        <div className="px-3 py-2 flex flex-row justify-between bg-stone-200 items-center hover:cursor-pointer">
          <button className="tracking-wide">{name}</button>
          <ChevronDown className="w-5" />
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-white border p-3 shadow w-56"
          side="bottom"
          align="start"
          sideOffset={10}
          alignOffset={0}
        >
          <div className="flex flex-col gap-2">
            {catalog.map((item) => (
              <label key={item} className="flex items-center justify-between">
                <span>{item}</span>
                <input type="checkbox" id={item} name={item} />
              </label>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
