import Image from "next/image";
import BannerCard from "@/features/banner/BannerCard";

const Banner = ({
  imageUrl,
  headline,
  description,
  name,
  link,
  position,
}: {
  imageUrl: string;
  headline: string;
  description: string;
  name: string;
  link: string;
  position: "left" | "right";
}) => {
  return (
    <section className="relative h-auto w-full">
      <Image
        src={imageUrl}
        alt={`banner-${headline}`}
        width={600}
        height={500}
        className="h-auto w-full"
      />
      <BannerCard
        headline={headline}
        description={description}
        name={name}
        link={link}
        position={position}
      />
    </section>
  );
};
export default Banner;
