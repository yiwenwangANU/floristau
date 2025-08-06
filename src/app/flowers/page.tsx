"use client";
import useFlowers from "@/hooks/useGetFlowers";

const Flowers = () => {
  const { data, isLoading, error } = useFlowers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Our Flowers</h1>
      <ul>
        {data?.map((flower) => (
          <li key={flower.id}>{flower.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Flowers;
