import { Plus } from "lucide-react";

const AddNewFlower = () => {
  return (
    <div className="group border rounded-md overflow-hidden bg-gray-300 hover:cursor-pointer lg:w-[23%] md:w-[30%] sm:w-[45%] h-[500px]">
      <div className="relative">
        <Plus className="w-[400px] h-[400px] mx-auto" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-200"></div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="p-4"></div>
      </div>
    </div>
  );
};

export default AddNewFlower;
