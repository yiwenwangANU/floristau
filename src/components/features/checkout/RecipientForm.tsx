import Button from "@/components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import PlacesAutocomplete from "./PlacesAutocomplete ";
import { RecipientFormValues } from "@/libs/types/forms";

const RecipientForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<RecipientFormValues>({
    defaultValues: { address: "", suburb: "", postcode: "" },
  });
  const onSubmit: SubmitHandler<RecipientFormValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="w-4/5 pt-10 border-t-2 border-gray-200 mt-10">
      <span className="flex flex-row gap-5 items-center">
        <span className="text-xl flex items-center justify-center w-12 h-12 text-white bg-black rounded-full">
          2
        </span>
        <span className="text-2xl">Recipient Details</span>
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col py-10 gap-5">
          <label className="text-xl">First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "This field is required" })}
            placeholder="Enter your first name"
            className="w-full p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
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
            className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
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
            className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
          />
          {errors.phone && (
            <span className="mt-2 text-sm text-red-600">
              {errors.phone.message}
            </span>
          )}
          <label className="text-xl">Address</label>
          <PlacesAutocomplete control={control} setValue={setValue} />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2 items-end ">
              <div className="flex flex-row gap-4 items-center">
                <label className="text-xl">Suburb</label>
                <input
                  type="text"
                  {...register("suburb", {
                    required: "This field is required",
                  })}
                  placeholder="Enter your suburb"
                  className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
                />
              </div>
              {errors.suburb && (
                <span className="mt-2 text-sm text-red-600 place-content-end">
                  {errors.suburb && (
                    <span className="mt-2 text-sm text-red-600">
                      {errors.suburb.message}
                    </span>
                  )}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 items-end">
              <div className="flex flex-row gap-4 items-center">
                <label className="text-xl">Postcode</label>
                <input
                  type="text"
                  {...register("postcode", {
                    required: "This field is required",
                  })}
                  placeholder="Enter your postcode"
                  className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
                />
              </div>
              {errors.postcode && (
                <span className="mt-2 text-sm text-red-600 place-content-end">
                  {errors.postcode.message}
                </span>
              )}
            </div>
          </div>

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
            className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
          />
          {errors.phone && (
            <span className="mt-2 text-sm text-red-600">
              {errors.phone.message}
            </span>
          )}
          <label className="text-xl">Card Message</label>
          <textarea
            {...register("message")}
            placeholder="Enter your message"
            className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
          />
          <label className="text-xl">Delivery Instructions</label>
          <textarea
            {...register("deliveryInstructions")}
            placeholder="Enter your delivery instructions"
            className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
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
