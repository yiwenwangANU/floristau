"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setRecipientMode } from "@/redux/RecipientSlice";
import {} from "@/redux/SenderSlice";

const RecipientInfo = () => {
  const { firstName, lastName, phone, address } = useAppSelector((s) => {
    return s.recipient;
  });
  const dispatch = useAppDispatch();
  const handleEditRecipient = () => {
    dispatch(setRecipientMode("form"));
  };
  return (
    <div className="w-4/5 flex flex-col gap-1">
      <span className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-6 items-center">
          <span className="text-xl flex items-center justify-center w-12 h-12 text-white bg-black rounded-full">
            1
          </span>
          <span className="text-2xl">Recipient Details</span>
        </div>
        <span
          className="underline cursor-pointer text-lg"
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
