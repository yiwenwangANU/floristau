"use client";

import { use } from "react";
import useGetFlowerById from "@/hooks/useGetFlowerById";
import Image from "next/image";
import { Jost, Roboto } from "next/font/google";
import { Accordion } from "radix-ui";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionComponent";

const jost = Jost({
  weight: "500",
  subsets: ["latin"],
  style: "italic",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

const FlowerPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { data, isPending, isError } = useGetFlowerById(Number(id));

  console.log(data);
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-500">Loading flower...</div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-500">Failed to load flower.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-50 min-h-screen pt-30 pb-2 px-1 sm:px-8">
      <div className="w-4/5">
        <Image src={data?.imageUrl} alt={data?.name} width={900} height={900} />
      </div>
      <div className="flex flex-col gap-5 w-4/5">
        <div className="text-5xl font-mono tracking-wide">{data?.name}</div>
        <div className={`text-3xl font-bold ${jost.className}`}>
          AUS ${data?.price}
        </div>
        <div
          className={`text-text-gray text-lg tracking-wide ${roboto.className}`}
        >
          {data?.description}
        </div>
        <Accordion.Root
          className="w-[300px] rounded-md bg-mauve6 shadow-[0_2px_10px] shadow-black/5"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It`&apos;`s unstyled by default, giving you freedom over the
              look and feel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
              Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
          </AccordionItem>
        </Accordion.Root>
      </div>
    </div>
  );
};

export default FlowerPage;
