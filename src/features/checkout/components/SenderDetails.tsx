"use client";

import { useAppSelector } from "@/redux/hooks";
import SenderForm from "./SenderForm";
import SenderInfo from "./SenderInfo";

export default function SenderDetails() {
  const sender = useAppSelector((s) => s.sender);

  if (sender.mode == "form") {
    return <SenderForm />;
  } else {
    return <SenderInfo />;
  }
}
