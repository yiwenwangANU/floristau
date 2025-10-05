"use client";
import { ChevronDown } from "lucide-react";
import { Popover } from "radix-ui";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import useHandleCheckMulti from "@/features/filter/hooks/useHandleCheckMulti";

type FilterMultiProp = {
  name: string;
  catalog: { label: string; value: string }[];
};

export default function FilterMulti(filterMultiProp: FilterMultiProp) {
  const [open, setOpen] = useState<boolean>(false);
  const { handleCheck } = useHandleCheckMulti();
  const searchParams = useSearchParams();
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        asChild
        className="w-36 hover:outline-2 hover:outline-black"
      >
        <div className="flex flex-row items-center justify-between bg-stone-200 px-3 py-2 hover:cursor-pointer">
          <button className="tracking-wide capitalize">
            {filterMultiProp.name}
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
            {filterMultiProp.catalog.map((item) => {
              const checked = searchParams
                .getAll(filterMultiProp.name)
                ?.includes(item.value);
              return (
                <label
                  key={item.value}
                  className="flex w-full cursor-pointer items-center justify-between px-3 py-2 capitalize select-none hover:bg-stone-100"
                >
                  <span>{item.label}</span>
                  <input
                    type="checkbox"
                    name={filterMultiProp.name}
                    checked={checked} // controlled
                    onChange={() =>
                      handleCheck(filterMultiProp.name, item, checked)
                    }
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
