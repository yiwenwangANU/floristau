import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

import Button from "@/components/ui/Button";
import { RecipientFormValues } from "@/libs/types/forms";
import {
  setRecipientMode,
  updateRecipient,
} from "@/redux/slices/RecipientSlice";

import PlacesAutocomplete from "@/features/checkout/components/PlacesAutocomplete";

const RecipientForm = () => {
  const {
    firstName,
    lastName,
    phone,
    address,
    suburb,
    postcode,
    cardMessage,
    deliveryInstructions,
  } = useAppSelector((s) => s.recipient);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm<RecipientFormValues>({
    defaultValues: {
      firstName,
      lastName,
      phone,
      address,
      suburb,
      postcode,
      cardMessage,
      deliveryInstructions,
    },
  });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<RecipientFormValues> = (data) => {
    console.log(data);
    dispatch(updateRecipient(data));
    dispatch(setRecipientMode("info"));
  };
  useEffect(() => {
    // rehydrate RHF whenever Redux changes (e.g., when entering “Edit” with new data)
    reset({
      ...getValues(),
      firstName,
      lastName,
      phone,
      address,
      suburb,
      postcode,
      cardMessage,
      deliveryInstructions,
    });
  }, [
    firstName,
    lastName,
    phone,
    address,
    suburb,
    postcode,
    cardMessage,
    deliveryInstructions,
    getValues,
    reset,
  ]);
  return (
    <div className="mt-10 w-4/5 border-t-2 border-gray-200 pt-10">
      <span className="flex flex-row items-center gap-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white">
          2
        </span>
        <span className="text-2xl">Recipient Details</span>
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 py-10">
          <label className="text-xl">First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "This field is required" })}
            placeholder="Enter your first name"
            className="w-full rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
          {errors.firstName && (
            <span className="mt-2 text-sm text-red-600">
              {errors.firstName.message}
            </span>
          )}
          <label className="text-xl">Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: "This field is required" })}
            placeholder="Enter your last name"
            className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
          {errors.lastName && (
            <span className="mt-2 text-sm text-red-600">
              {errors.lastName.message}
            </span>
          )}
          <label className="text-xl">Phone Number</label>
          <input
            type="text"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone must be exactly 10 digits",
              },
            })}
            placeholder="Enter your phone number"
            className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
          {errors.phone && (
            <span className="mt-2 text-sm text-red-600">
              {errors.phone.message}
            </span>
          )}
          <label className="text-xl">Address</label>
          <PlacesAutocomplete control={control} setValue={setValue} />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-row items-center gap-4">
                <label className="text-xl">Suburb</label>
                <input
                  type="text"
                  {...register("suburb", {
                    required: "This field is required",
                  })}
                  placeholder="Enter your suburb"
                  className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
                />
              </div>
              {errors.suburb && (
                <span className="mt-2 place-content-end text-sm text-red-600">
                  {errors.suburb && (
                    <span className="mt-2 text-sm text-red-600">
                      {errors.suburb.message}
                    </span>
                  )}
                </span>
              )}
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-row items-center gap-4">
                <label className="text-xl">Postcode</label>
                <input
                  type="text"
                  {...register("postcode", {
                    required: "This field is required",
                  })}
                  placeholder="Enter your postcode"
                  className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
                />
              </div>
              {errors.postcode && (
                <span className="mt-2 place-content-end text-sm text-red-600">
                  {errors.postcode.message}
                </span>
              )}
            </div>
          </div>

          <label className="text-xl">Card Message</label>
          <textarea
            {...register("cardMessage")}
            placeholder="Enter your message"
            className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
          <label className="text-xl">Delivery Instructions</label>
          <textarea
            {...register("deliveryInstructions")}
            placeholder="Enter your delivery instructions"
            className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
        </div>

        <Button variant="next" onClick={handleSubmit(onSubmit)}>
          Next
        </Button>
      </form>
    </div>
  );
};
export default RecipientForm;
