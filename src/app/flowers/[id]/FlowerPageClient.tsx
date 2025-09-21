"use client";

import Image from "next/image";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

import useGetFlowerById from "@/hooks/useGetFlowerById";
import useGetWine from "@/hooks/useGetWine";
import useGetChocolate from "@/hooks/useGetChocolate";
import useGetTeddy from "@/hooks/useGetTeddys";

import FlowerDetail from "@/components/features/products/ProductDetail";
import FlowerForm from "@/components/form/FlowerForm";

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
    <div className="flex min-h-screen flex-row gap-12 px-2 pt-12 pb-2 sm:px-8">
      <div className="w-4/5 px-5 py-15">
        <Image
          src={flowerData.imageUrl}
          alt={flowerData.name}
          width={900}
          height={900}
          priority
          className="h-auto w-auto"
        />
        <p className="p-2">The Image pictured is a Premium product.</p>
        <p className="p-2 tracking-wide">
          <strong>Disclaimer:</strong> Each arrangement is handcrafted with the
          freshest seasonal flowers. Images are examples only; colours and
          varieties may vary based on availability.
        </p>
      </div>

      <div className="flex w-4/5 flex-col gap-5 px-5 py-15">
        <FlowerDetail
          name={flowerData.name}
          description={flowerData.description}
        />
        <FlowerForm
          id={id}
          flowerData={flowerData}
          wineData={wineData}
          chocolateData={chocolateData}
          teddyData={teddyData}
        />
      </div>
    </div>
  );
}
