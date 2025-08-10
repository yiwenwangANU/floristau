import { Plus } from "lucide-react";

const AddNewFlower = () => {
  return (
    <div className="group border rounded-md overflow-hidden hover:cursor-pointer lg:w-[23%] md:w-[30%] sm:w-[45%]">
      <div className="relative bg-gray-300 aspect-square">
        <Plus className="w-[400px] h-[400px] mx-auto object-cover" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-200"></div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="pb-5 pt-8 text-lg font-semibold mx-auto">
          Create new Flower
        </h3>
      </div>
    </div>
  );
};

export default AddNewFlower;
