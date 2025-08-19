"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Dialog, Switch } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import MultiSelect from "@/components/ui/MultiSelect";
import Button from "@/components/ui/Button";
import { NewFlower } from "@/libs/types/flowers";
import useCreateFlower from "@/hooks/useCreateFlower";

/* ------------------------------ constants ------------------------------ */
const FLOWER_OPTIONS: Array<{ label: string; value: number }> = [
  { label: "Roses", value: 1 },
  { label: "Chrysanthemums", value: 2 },
  { label: "Carnations", value: 3 },
  { label: "Natives", value: 4 },
  { label: "Gerberas", value: 5 },
  { label: "Orchids", value: 6 },
  { label: "Lilies", value: 7 },
  { label: "Tropicals", value: 8 },
  { label: "Sunflowers", value: 9 },
  { label: "Irises", value: 10 },
  { label: "Tulips", value: 11 },
  { label: "Other", value: 12 },
] as const;

const PRODUCT_TYPE_OPTIONS = [
  { label: "Box", value: "box" },
  { label: "Bouquet", value: "bouquet" },
  { label: "Vase", value: "vase" },
  { label: "Basket", value: "basket" },
  { label: "Funeral", value: "funeral" },
  { label: "Hamper", value: "hamper" },
  { label: "Plant", value: "plant" },
  { label: "Succulent", value: "succulent" },
  { label: "Dried Flower", value: "driedflower" },
  { label: "Other", value: "other" },
] as const;

const COLOR_OPTIONS = [
  { label: "Red", value: "red" },
  { label: "White", value: "white" },
  { label: "Yellow", value: "yellow" },
  { label: "Pink", value: "pink" },
  { label: "Green", value: "green" },
  { label: "Orange", value: "orange" },
  { label: "Purple", value: "purple" },
  { label: "Mixed", value: "mixed" },
] as const;

const OCCASION_OPTIONS = [
  { label: "Birthday", value: "birthday" },
  { label: "Sympathy", value: "sympathy" },
  { label: "Thank You", value: "thankyou" },
  { label: "Get Well", value: "getwell" },
  { label: "Funeral", value: "funeral" },
  { label: "New Baby", value: "newbaby" },
  { label: "Congratulations", value: "congratulations" },
  { label: "Other", value: "other" },
] as const;

const AddNewFlower = () => {
  const [open, setOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { isPending, mutate, isSuccess } = useCreateFlower();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
    setValue,
  } = useForm<NewFlower>({
    defaultValues: {
      name: "",
      description: "",
      imageFile: undefined,
      productType: "",
      color: "",
      occasion: "",
      FlowerTypeIds: [],
      isPopular: false,
      price: 0,
      discount: 0,
    },
  });

  const productType = watch("productType");
  const color = watch("color");
  const occasion = watch("occasion");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };
  const onSubmit: SubmitHandler<NewFlower> = (data) => {
    console.log(data);
    mutate(data);
  };
  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess, setOpen]);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="group border rounded-md overflow-hidden hover:cursor-pointer lg:w-[23%] md:w-[30%] sm:w-[45%]">
          <div className="relative bg-stone-200 aspect-square">
            <Plus className="w-[400px] h-[400px] mx-auto object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-200"></div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="pb-5 pt-8 text-xl font-semibold mx-auto">
              Create new Flower
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content
          onInteractOutside={(event) => event.preventDefault()}
          className="fixed inset-x-2 top-2 bottom-2 w-auto rounded-md bg-white shadow overflow-y-auto p-[25px]
           sm:left-1/2 sm:top-1/2 sm:inset-x-auto sm:bottom-auto sm:w-[90vw] sm:max-w-[500px]
           sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-md sm:max-h-[85vh]"
        >
          <Dialog.Title className="m-0 text-[20px] font-semibold">
            Create new flower
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal">
            Create your new flower here. Click save when you are done.
          </Dialog.Description>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
          >
            <fieldset className="mb-[15px] flex items-center gap-5 pt-2">
              <label
                className="w-[90px] text-right text-[15px] font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="block h-[35px] w-full flex-1 rounded px-2.5 text-[15px] leading-none 
                            border border-gray-300 focus:border-2 focus:border-violet-600"
                id="name"
                {...register("name", { required: true })}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] font-semibold"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="flex-1 block w-full h-24 rounded-md bg-white p-2 text-[15px] leading-normal
                            border border-gray-300 focus:border-2 focus:border-violet-600"
                id="description"
                {...register("description", { required: true })}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] font-semibold"
                htmlFor="image"
              >
                Image
              </label>
              <input
                type="file"
                {...register("imageFile")}
                className="flex-1 border border-gray-300 rounded-lg w-full 
                  focus:outline-none focus:ring-2 focus:ring-violet-500
                file:border-r-gray-300 file:border-r file:mr-5 file:py-1 file:px-3
                file:bg-primary file:text-white file:font-bold
                  hover:file:cursor-pointer hover:file:bg-white
                hover:file:text-primary-hover"
                onChange={handleImageChange}
              />
            </fieldset>
            {imagePreview && (
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="w-[90px] text-right text-[15px] font-semibold"
                  htmlFor="image"
                >
                  Preview
                </label>
                <div className="mt-2">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={80} // equivalent to w-20
                    height={80} // equivalent to h-20
                    className="flex-1 mt-2 rounded-lg border border-gray-300 object-cover"
                  />
                </div>
              </fieldset>
            )}
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] font-semibold"
                htmlFor="productType"
              >
                Product Type
              </label>
              <select
                id="productType"
                className={`inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] border border-gray-300 focus:border-2 focus:border-violet-600 ${
                  productType == "" ? "text-gray-500" : "text-gray-900"
                }`}
                {...register("productType", { required: true })}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select a type
                </option>
                {PRODUCT_TYPE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] font-semibold"
                htmlFor="color"
              >
                Color
              </label>
              <select
                id="color"
                className={`inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none border border-gray-300 focus:border-2 focus:border-violet-600 ${
                  color == "" ? "text-gray-500" : "text-gray-900"
                }`}
                {...register("color", { required: true })}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select a color
                </option>
                {COLOR_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] font-semibold"
                htmlFor="occasion"
              >
                Occasion
              </label>
              <select
                id="occasion"
                className={`inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none border border-gray-300 focus:border-2 focus:border-violet-600 ${
                  occasion == "" ? "text-gray-500" : "text-gray-900"
                }`}
                {...register("occasion", { required: true })}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select an occasion
                </option>
                {OCCASION_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label className="w-[90px] text-right text-[15px] font-semibold pt-1">
                Flowers
              </label>
              <div className="flex-1">
                <Controller
                  name="FlowerTypeIds"
                  control={control}
                  rules={{
                    validate: (v) =>
                      (v?.length ?? 0) > 0 || "Pick at least one",
                  }}
                  render={({ field }) => (
                    <MultiSelect
                      options={FLOWER_OPTIONS}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select flowers…"
                    />
                  )}
                />
              </div>
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] font-semibold"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="number"
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none border border-gray-300 focus:border-2 focus:border-violet-600"
                id="price"
                defaultValue={0}
                {...register("price")}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] font-semibold"
                htmlFor="discount"
              >
                Discount
              </label>
              <input
                type="number"
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none border border-gray-300 focus:border-2 focus:border-violet-600"
                id="discount"
                defaultValue={0}
                {...register("discount")}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] font-semibold"
                htmlFor="isPopular"
              >
                Is Popular
              </label>

              <Controller
                name="isPopular"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Switch.Root
                    id="isPopular"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="relative h-[25px] w-[42px] cursor-default rounded-full bg-gray-500 shadow-primary outline-none 
                   focus:shadow-[0_0_0_2px] focus:shadow-primary data-[state=checked]:bg-primary"
                  >
                    <Switch.Thumb
                      className="block size-[21px] translate-x-0.5 rounded-full bg-white 
                     shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 
                     will-change-transform data-[state=checked]:translate-x-[19px]"
                    />
                  </Switch.Root>
                )}
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <Button
                variant="create"
                disabled={isPending}
                type="submit"
                className="font-semibold h-12 inline-flex items-center justify-center rounded px-[15px]"
              >
                {isPending ? "Creating..." : "Create Flower"}
              </Button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddNewFlower;
