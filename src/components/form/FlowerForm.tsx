import Button from "@/components/ui/Button";
import SizeSelect from "@/components/form/SizeSelect";
import DeliveryPost from "@/components/form/DeliveryPost";
import DeliveryDate from "@/components/form/DeliveryDate";
import GiftSelect from "@/components/form/GiftSelect";
import CartDialog from "@/components/features/cart/CartDialog";
import { useForm } from "react-hook-form";
import { GetGiftsResponse, GiftQty } from "@/libs/types/gifts";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { newItem, decrement, increment } from "@/redux/CartSlice";
import { CartItem } from "@/libs/types/cart";
import { nanoid } from "@reduxjs/toolkit";
import { store } from "@/redux/store";

import { useState } from "react";
import { FlowerFormValues } from "@/libs/types/forms";
import { GetFlowerResponse } from "@/libs/types/flowers";
import { useCartContext } from "@/contexts/CartContext";

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
  const {
    cartOpen,
    handleCartOpen,
    handleCartClose,
    handleOpenChange,
    handleGiftClose,
  } = useCartContext();
  const dispatch = useAppDispatch();
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
  const filterGiftQty = (giftQty: GiftQty) => {
    return {
      wine: giftQty.wine.filter((item) => item.qty > 0),
      chocolate: giftQty.chocolate.filter((item) => item.qty > 0),
      teddy: giftQty.teddy.filter((item) => item.qty > 0),
    };
  };
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FlowerFormValues>({
    defaultValues: {
      size: "standard",
      giftQty: giftDefaults,
      flowerId: Number(id),
      postcode: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const onSubmit = (data: FlowerFormValues) => {
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
      giftQty: filterGiftQty(data.giftQty),
      postcode: data.postcode,
      message: data.message,
    };
    dispatch(newItem(cartItem));
    console.log("Store state: ", store.getState());
  };
  const onBuyNow = (data: FlowerFormValues) => {
    onSubmit(data);
    console.log("Buying now:", data);
  };
  const onAddToCart = (data: FlowerFormValues) => {
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
        <CartDialog
          wineData={wineData}
          chocolateData={chocolateData}
          teddyData={teddyData}
          open={cartOpen}
          onOpenChange={handleOpenChange}
          title="Add to Cart"
          onClick={handleSubmit(onAddToCart, onAddToCartInvalid)}
        />
      </div>
    </form>
  );
};
export default FlowerForm;
