"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setRecipientMode } from "@/redux/slices/RecipientSlice";
import {} from "@/redux/slices/SenderSlice";

const RecipientInfo = () => {
  const { firstName, lastName, phone, address } = useAppSelector((s) => {
    return s.recipient;
  });
  const dispatch = useAppDispatch();
  const handleEditRecipient = () => {
    dispatch(setRecipientMode("form"));
  };
  return (
    <div className="flex w-4/5 flex-col gap-1">
      <span className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white">
            2
          </span>
          <span className="text-2xl">Recipient Details</span>
        </div>
        <span
          className="cursor-pointer text-lg underline"
          onClick={handleEditRecipient}
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
        <span>{address}</span>
      </div>
    </div>
  );
};
export default RecipientInfo;
