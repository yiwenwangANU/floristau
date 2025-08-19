"use client";

import { use } from "react";
import useGetFlowerById from "@/hooks/useGetFlowerById";
import Image from "next/image";
import { Jost } from "next/font/google";

const jost = Jost({
  weight: "500",
  subsets: ["latin"],
  style: "italic",
});

const FlowerPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { data, isPending, isError } = useGetFlowerById(Number(id));

  console.log(data);
  return (
    <div className="flex flex-row gap-50 min-h-screen pt-30 pb-2 px-1 sm:px-8">
      <div className="w-4/5">
        <Image src={data?.imageUrl} alt={data?.name} width={900} height={900} />
      </div>
      <div className="flex flex-col gap-5 w-4/5">
        <div className="text-5xl font-medium tracking-wide">{data?.name}</div>
        <div className={`text-3xl font-bold ${jost.className}`}>
          AUS ${data?.price}
        </div>
        <div className={`text-text-gray text-lg `}>{data?.description}</div>
      </div>
    </div>
  );
};

export default FlowerPage;
