"use client";

import Image from "next/image";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

import useGetFlowerById from "@/hooks/useGetFlowerById";
import useGetWine from "@/hooks/useGetWine";
import useGetChocolate from "@/hooks/useGetChocolate";
import useGetTeddy from "@/hooks/useGetTeddys";

import FlowerDetail from "@/components/features/flowers/FlowerDetail";
import GiftSelect from "@/components/features/flowers/GiftSelect";
import { useForm } from "react-hook-form";
import { GiftFormValues } from "@/libs/types/gifts";

export default function FlowerPageClient({ id }: { id: string }) {
  const {
    data: flowerData,
    isPending: flowerIsPending,
    isError: flowerIsError,
  } = useGetFlowerById(Number(id));
  const {
    data: wineData,
    isPending: wineIsPending,
    isError: wineIsError,
  } = useGetWine();
  const {
    data: chocolateData,
    isPending: chocolateIsPending,
    isError: chocolateError,
  } = useGetChocolate();
  const {
    data: teddyData,
    isPending: teddyIsPending,
    isError: teddyError,
  } = useGetTeddy();

  const { control, handleSubmit } = useForm<GiftFormValues>();
  const onSubmit = (data: GiftFormValues) => console.log(data);

  if (flowerIsPending || wineIsPending || chocolateIsPending || teddyIsPending)
    return <Loading />;
  if (
    flowerIsError ||
    !flowerData ||
    wineIsError ||
    !wineData ||
    !chocolateData ||
    chocolateError ||
    !teddyData ||
    teddyError
  )
    return <ErrorPage />;

  return (
    <div className="flex flex-row gap-12 min-h-screen pt-12 pb-2 px-2 sm:px-8">
      <div className="w-4/5">
        <Image
          src={flowerData.imageUrl}
          alt={flowerData.name}
          width={900}
          height={900}
          className="h-auto w-auto"
        />
      </div>

      <div className="flex flex-col gap-5 w-4/5">
        <FlowerDetail
          name={flowerData.name}
          description={flowerData.description}
          price={flowerData.price}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <GiftSelect
            wineData={wineData}
            chocolateData={chocolateData}
            teddyData={teddyData}
            control={control}
          />
        </form>
      </div>
    </div>
  );
}
