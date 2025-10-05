import useGetFlowerById from "@/hooks/useGetFlowerById";
import Image from "next/image";
import ProductImageSpinner from "@/features/products/components/ProductImageSpinner";

const ProductImage = ({ id }: { id: string }) => {
  const { data, isPending, isError } = useGetFlowerById(Number(id));
  return (
    <div className="w-4/5 px-5 py-15">
      {isPending || isError ? (
        <ProductImageSpinner />
      ) : (
        <Image
          src={data.imageUrl}
          alt={data.name}
          width={900}
          height={900}
          priority
          className="h-auto w-auto"
        />
      )}
      <p className="p-2">The Image pictured is a Premium product.</p>
      <p className="p-2 tracking-wide">
        <strong>Disclaimer:</strong> Each arrangement is handcrafted with the
        freshest seasonal flowers. Images are examples only; colours and
        varieties may vary based on availability.
      </p>
    </div>
  );
};

export default ProductImage;
