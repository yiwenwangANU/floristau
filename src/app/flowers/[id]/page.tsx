"use client";

import { use } from "react";
import useGetFlowerById from "@/hooks/useGetFlowerById";
const FlowerPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { data, isPending, isError } = useGetFlowerById(Number(id));
  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-2xl sm:text-4xl pt-20 pb-2 px-1 sm:px-8 font-sans font-medium">
        Our Best Selling Flowers
      </div>
      <div>Product ID: {id}</div>
    </div>
  );
};

export default FlowerPage;
