"use client";
import { useAppSelector } from "@/redux/hooks";
import RecipientForm from "./RecipientForm";
import RecipientInfo from "./RecipientInfo";
export default function RecipientDetails() {
  const recipient = useAppSelector((s) => s.recipient);
  return (
    <div>
      {recipient.mode == "form" ? (
        <RecipientForm />
      ) : recipient.mode == "info" ? (
        <RecipientInfo />
      ) : null}
    </div>
  );
}
