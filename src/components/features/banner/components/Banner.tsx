import Image from "next/image";
import BannerCard from "@/components/features/banner/components/BannerCard";
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
    <section className="relative w-full h-auto">
      <Image
        src={imageUrl}
        alt={`banner-${headline}`}
        width={600}
        height={500}
        className="w-full h-auto"
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
