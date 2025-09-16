"use client";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Popover } from "radix-ui";
import { useState } from "react";
export default function FlowerTypeFilter({
  name,
  catalog,
}: {
  name: string;
  catalog: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);
  const updateQueryString = (name: string, item: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    if (checked) {
      params.append(name, item);
    }
    if (!checked) {
      params.delete(name, item);
    }
    return params.toString();
  };

  const handleCheck = (name: string, item: string, checked: boolean) => {
    router.push(pathname + "?" + updateQueryString(name, item, checked));
  };
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        asChild
        className="w-32 hover:outline-2 hover:outline-black"
      >
        <div className="flex flex-row items-center justify-between bg-stone-200 px-3 py-2 hover:cursor-pointer">
          <button className="tracking-wide">{name}</button>
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
            {catalog.map((item) => (
              <label
                key={item}
                className="flex w-full cursor-pointer items-center justify-between px-3 py-2 text-sm select-none hover:bg-stone-100"
              >
                <span>{item}</span>
                <input
                  type="checkbox"
                  name={item}
                  onChange={(e) => handleCheck(name, item, e.target.checked)}
                  className="relative h-5 w-5 cursor-pointer appearance-none border-2 border-gray-600 checked:bg-stone-400 checked:after:absolute checked:after:top-[-2px] checked:after:left-[2px] checked:after:text-sm checked:after:font-bold checked:after:text-white checked:after:content-['✓']"
                />
              </label>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
