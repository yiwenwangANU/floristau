"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSenderMode } from "@/redux/slices/SenderSlice";

const SenderInfo = () => {
  const { firstName, lastName, phone, email } = useAppSelector((s) => {
    return s.sender;
  });
  const dispatch = useAppDispatch();
  const handleEditSender = () => {
    dispatch(setSenderMode("form"));
  };
  return (
    <div className="flex w-4/5 flex-col gap-1">
      <span className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white">
            1
          </span>
          <span className="text-2xl">Sender Details</span>
        </div>
        <span
          className="cursor-pointer text-lg underline"
          onClick={handleEditSender}
        >
          Edit
        </span>
      </span>
      <div className="flex flex-row gap-2 pl-20 font-medium">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <div className="flex flex-row gap-2 pl-20 font-medium">
        <span>{phone}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};
export default SenderInfo;
