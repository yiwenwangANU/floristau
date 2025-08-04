"use client";
import { useParams } from "next/navigation";

const FlowerPage = () => {
  const params = useParams(); // { id: '123' }
  return <div>Product ID: {params.id}</div>;
};

export default FlowerPage;
