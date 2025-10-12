"use client";
import { flowersApi } from "@/libs/api/flowersApi";
import { useQuery } from "@tanstack/react-query";

const useGetFlowerById = (id: number) => {
  return useQuery({
    queryKey: ["getFlowerById", id],
    queryFn: () => flowersApi.getFlowerById(id),
  });
};

export default useGetFlowerById;
