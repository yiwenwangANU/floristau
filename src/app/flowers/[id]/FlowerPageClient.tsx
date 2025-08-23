"use client";

import Image from "next/image";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

import useGetFlowerById from "@/hooks/useGetFlowerById";

import FlowerDetail from "@/components/features/flowers/FlowerDetail";
import GiftSelect from "@/components/features/flowers/GiftSelect";

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
        <FlowerDetail
          name={data.name}
          description={data.description}
          price={data.price}
        />
        <GiftSelect />
      </div>
    </div>
  );
}
