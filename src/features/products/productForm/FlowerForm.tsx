"use client";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { store } from "@/redux/store";

import Button from "@/components/ui/Button";
import { GetGiftsResponse, GiftQty } from "@/libs/types/gifts";
import { newItem } from "@/redux/slices/CartSlice";
import { CartItem } from "@/libs/types/cart";
import { ProductFormValues } from "@/libs/types/forms";
import { useCartContext } from "@/contexts/CartContext";

import SizeSelect from "@/features/products/productForm/SizeSelect";
import DeliveryPost from "@/features/products/productForm/DeliveryPost";
import DeliveryDate from "@/features/products/productForm/DeliveryDate";
import GiftSelect from "@/features/products/productForm/GiftSelect";
import { useEffect } from "react";
import { GetFlowerResponse } from "@/libs/types/flowers";

const FlowerForm = ({
  id,
  flowerData,
  wineData,
  chocolateData,
  teddyData,
}: {
  id: string;
  flowerData: GetFlowerResponse;
  wineData: GetGiftsResponse;
  chocolateData: GetGiftsResponse;
  teddyData: GetGiftsResponse;
}) => {
  const { handleCartOpen, handleCartClose, handleGiftClose } = useCartContext();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ProductFormValues>({
    defaultValues: {
      size: "standard",
      giftQty: { wine: [], chocolate: [], teddy: [] },
      productId: Number(id),
      postcode: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  useEffect(() => {
    if (!wineData || !chocolateData || !teddyData) return;
    const giftDefaults: GiftQty = {
      wine: wineData.map((w) => ({
        name: w.name,
        price: w.price,
        qty: 0,
        type: "wine",
      })),
      chocolate: chocolateData.map((c) => ({
        name: c.name,
        price: c.price,
        qty: 0,
        type: "chocolate",
      })),
      teddy: teddyData.map((t) => ({
        name: t.name,
        price: t.price,
        qty: 0,
        type: "teddy",
      })),
    };
    reset({
      size: "standard",
      giftQty: giftDefaults,
      productId: Number(id),
      postcode: "",
    });
  }, [reset, id, wineData, chocolateData, teddyData]);

  const filterGiftQty = (giftQty: GiftQty) => {
    return {
      wine: giftQty.wine.filter((item) => item.qty > 0),
      chocolate: giftQty.chocolate.filter((item) => item.qty > 0),
      teddy: giftQty.teddy.filter((item) => item.qty > 0),
    };
  };

  const onSubmit = (data: ProductFormValues) => {
    const deliveryDateISO = data.deliveryDate
      ? data.deliveryDate.toISOString()
      : null;
    const cartItem: CartItem = {
      id: nanoid(),
      productId: flowerData.id,
      name: flowerData.name,
      price: flowerData.price,
      qty: 1,
      imageUrl: flowerData.imageUrl,
      deliveryDateISO,
      size: data.size,
      giftQty: filterGiftQty(data.giftQty),
      postcode: data.postcode,
      message: data.message,
      stripePriceId: flowerData.stripePriceId,
      stripeProductId: flowerData.stripeProductId,
    };
    dispatch(newItem(cartItem));
    console.log("Store state: ", store.getState());
  };
  const onBuyNow = (data: ProductFormValues) => {
    onSubmit(data);
    console.log("Buying now:", data);
  };
  const onAddToCart = (data: ProductFormValues) => {
    onSubmit(data);
    console.log("Adding to cart:", data);
    handleGiftClose();
    handleCartOpen();
  };
  const onAddToCartInvalid = () => {
    handleCartClose();
  };
  return (
    <form>
      <SizeSelect control={control} price={flowerData.price} />
      <GiftSelect
        wineData={wineData}
        chocolateData={chocolateData}
        teddyData={teddyData}
        control={control}
      />
      <DeliveryPost control={control} />
      <DeliveryDate control={control} />
      <div className="flex flex-row gap-6">
        <Button
          variant="buyNow"
          name="buyNow"
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit(onBuyNow)}
        >
          Buy Now
        </Button>
        <Button
          variant="addToCart"
          name="addToCart"
          type="button"
          disabled={isSubmitting}
          onClick={handleSubmit(onAddToCart, onAddToCartInvalid)}
          className="my-10 w-full cursor-pointer overflow-hidden bg-stone-300 px-4 py-3 font-medium tracking-wide hover:bg-stone-400"
        >
          Add to Cart
        </Button>
      </div>
    </form>
  );
};
export default FlowerForm;
