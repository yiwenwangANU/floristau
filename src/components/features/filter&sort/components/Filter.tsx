"use client";
import { ChevronDown } from "lucide-react";
import { Popover } from "radix-ui";
import { useState } from "react";
import useHandleCheck from "../hooks/useHandleCheck";
import { useSearchParams } from "next/navigation";

type FilterProp = {
  name: string;
  catalog: string[];
};

export default function Filter(filterProp: FilterProp) {
  const [open, setOpen] = useState<boolean>(false);
  const { handleCheck } = useHandleCheck();
  const searchParams = useSearchParams();
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        asChild
        className="w-36 hover:outline-2 hover:outline-black"
      >
        <div className="flex flex-row items-center justify-between bg-stone-200 px-3 py-2 hover:cursor-pointer">
          <button className="tracking-wide capitalize">
            {filterProp.name}
          </button>
          <ChevronDown className="w-5" />
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="w-56 border bg-white shadow"
          side="bottom"
          align="start"
          sideOffset={10}
          alignOffset={0}
        >
          <div className="flex flex-col gap-2">
            {filterProp.catalog.map((item) => {
              const checked = searchParams.get(filterProp.name) === item; // only one allowed
              return (
                <label
                  key={item}
                  className="flex w-full cursor-pointer items-center justify-between px-3 py-2 capitalize select-none hover:bg-stone-100"
                >
                  <span>{item}</span>
                  <input
                    type="checkbox"
                    name={filterProp.name}
                    checked={checked} // controlled
                    onChange={() => handleCheck(filterProp.name, item, checked)}
                    className="relative h-5 w-5 cursor-pointer appearance-none border-2 border-gray-600 checked:bg-stone-400 checked:after:absolute checked:after:top-[-2px] checked:after:left-[2px] checked:after:text-sm checked:after:font-bold checked:after:text-white checked:after:content-['✓']"
                  />
                </label>
              );
            })}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
