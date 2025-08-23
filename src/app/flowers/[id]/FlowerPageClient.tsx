"use client";

import Image from "next/image";
import { Jost, Roboto } from "next/font/google";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";
import * as Accordion from "@radix-ui/react-accordion";
import useGetFlowerById from "@/hooks/useGetFlowerById";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/AccordionComponent";

const jost = Jost({ weight: "500", subsets: ["latin"], style: "italic" });
const roboto = Roboto({ weight: "400", subsets: ["latin"], style: "normal" });

export default function FlowerPageClient({ id }: { id: string }) {
  const { data, isPending, isError } = useGetFlowerById(Number(id));

  if (isPending) return <Loading />;
  if (isError || !data) return <ErrorPage />;

  return (
    <div className="flex flex-row gap-12 min-h-screen pt-12 pb-2 px-2 sm:px-8">
      <div className="w-4/5">
        <Image
          src={data.imageUrl}
          alt={data.name}
          width={900}
          height={900}
          className="h-auto w-auto"
        />
      </div>

      <div className="flex flex-col gap-5 w-4/5">
        <div className="text-5xl font-mono tracking-wide">{data.name}</div>

        <div className={`text-3xl font-bold ${jost.className}`}>
          AUD ${data.price}
        </div>

        <div
          className={`text-gray-600 text-lg tracking-wide ${roboto.className}`}
        >
          {data.description}
        </div>

        <Accordion.Root
          className="rounded-md shadow-[0_2px_10px] shadow-black/5"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl h-14">
              Add Wine
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s unstyled by default, giving you freedom over the
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
}
