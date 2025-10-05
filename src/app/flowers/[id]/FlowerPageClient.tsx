"use client";

import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

import useGetFlowerById from "@/features/products/flower/hooks/useGetFlowerById";
import useGetWine from "@/features/cart/hooks/useGetWine";
import useGetChocolate from "@/features/cart/hooks/useGetChocolate";
import useGetTeddy from "@/features/cart/hooks/useGetTeddys";

import ProductForm from "@/features/products/productForm/ProductForm";
import FlowerImage from "@/features/products/flower/components/FlowerImage";
import FlowerDetail from "@/features/products/flower/components/FlowerDetail";

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
      <FlowerImage id={id} />
      <div className="flex w-4/5 flex-col gap-5 px-5 py-15">
        <FlowerDetail id={id} />
        <ProductForm id={id} productData={flowerData} />
      </div>
    </div>
  );
}
