"use client";
import { Plus } from "lucide-react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  productType: string;
  occasion: string;
  color: string;
  discount?: number;
};

const AddNewFlower = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setOpen(false);
  };
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="group border rounded-md overflow-hidden hover:cursor-pointer lg:w-[23%] md:w-[30%] sm:w-[45%]">
          <div className="relative bg-stone-200 aspect-square">
            <Plus className="w-[400px] h-[400px] mx-auto object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-200"></div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="pb-5 pt-8 text-lg font-semibold mx-auto">
              Create new Flower
            </h3>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content
          onInteractOutside={(event) => event.preventDefault()}
          className="bg-white fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow"
        >
          <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
            Create new flower
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
            Create your new flower here. Click save when you are done.
          </Dialog.Description>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                id="name"
                {...register("name", { required: true })}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="inline-flex pt-2 h-[100px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                id="description"
                {...register("description", { required: true })}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="image"
              >
                Image
              </label>
              <input
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                id="image"
                {...register("imageUrl", { required: true })}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="productType"
              >
                Product Type
              </label>
              <select
                id="productType"
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                {...register("productType", { required: true })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a type
                </option>
                <option value="Flower">Flower</option>
                <option value="Bouquet">Bouquet</option>
                <option value="Plant">Plant</option>
              </select>
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="color"
              >
                Color
              </label>
              <select
                id="color"
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                {...register("color", { required: true })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a color
                </option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
              </select>
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="occasion"
              >
                Occasion
              </label>
              <select
                id="occasion"
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                {...register("occasion", { required: true })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select an occasion
                </option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Sympathy">Sympathy</option>
              </select>
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="w-[90px] text-right text-[15px] text-violet11"
                htmlFor="discount"
              >
                Discount
              </label>
              <input
                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                id="discount"
                defaultValue={0}
                {...register("discount")}
              />
            </fieldset>

            <div className="mt-[25px] flex justify-end">
              <button
                type="submit"
                className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none"
              >
                Create Flower
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
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
