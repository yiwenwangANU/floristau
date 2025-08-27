"use client";

import Image from "next/image";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

import useGetFlowerById from "@/hooks/useGetFlowerById";
import useGetWine from "@/hooks/useGetWine";
import useGetChocolate from "@/hooks/useGetChocolate";
import useGetTeddy from "@/hooks/useGetTeddys";

import FlowerDetail from "@/components/features/flowers/FlowerDetail";
import GiftSelect from "@/components/form/GiftSelect";
import { useForm } from "react-hook-form";
import { FlowerFormValues } from "@/libs/types/forms";
import Button from "@/components/ui/Button";
import SizeSelect from "@/components/form/SizeSelect";
import DeliveryPost from "@/components/form/DeliveryPost";
import DeliveryDate from "@/components/form/DeliveryDate";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { newItem, decrement, increment } from "@/redux/CartSlice";
import { CartItem } from "@/libs/types/cart";
import { nanoid } from "@reduxjs/toolkit";

export default function FlowerPageClient({ id }: { id: string }) {
  const dispatch = useAppDispatch();
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

  const { control, handleSubmit } = useForm<FlowerFormValues>({
    defaultValues: {
      size: "standard",
      giftQty: {},
      flowerId: Number(id),
      postcode: "",
    },
  });

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
  const onSubmit = (data: FlowerFormValues) => {
    console.log(data);
    const deliveryDateISO = data.deliveryDate
      ? data.deliveryDate.toISOString()
      : null;
    const cartItem: CartItem = {
      id: nanoid(),
      flowerId: flowerData.id,
      name: flowerData.name,
      price: flowerData.price,
      qty: 1,
      imageUrl: flowerData.imageUrl,
      deliveryDateISO,
      size: data.size,
      giftQty: data.giftQty,
      postcode: data.postcode,
      message: data.message,
    };
    dispatch(newItem(cartItem));
  };
  return (
    <div className="flex flex-row gap-12 min-h-screen pt-12 pb-2 px-2 sm:px-8">
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

      <div className="flex flex-col gap-5 w-4/5 px-5 py-15">
        <FlowerDetail
          name={flowerData.name}
          description={flowerData.description}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <SizeSelect control={control} price={flowerData.price} />
          <GiftSelect
            wineData={wineData}
            chocolateData={chocolateData}
            teddyData={teddyData}
            control={control}
          />
          <DeliveryPost control={control} />
          <DeliveryDate control={control} />
          <Button variant="addToCart" type="submit">
            Add to Cart
          </Button>
        </form>
      </div>
    </div>
  );
}
