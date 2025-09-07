import Image from "next/image";
import { Marcellus } from "next/font/google";
import Button from "@/components/ui/Button";
const marcellus = Marcellus({ weight: ["400"], subsets: ["latin"] });

const ExploreFlowersBanner = () => {
  return (
    <section className="explore-flowers relative w-full h-auto">
      <Image
        src="/FTD-Merx-SWAG-Desktop-Spring24-All-0349.webp"
        alt="flowers-banner"
        width={600}
        height={500}
        className="w-full h-auto"
      />
      <div className="absolute rounded inset-0 bg-secondary bg-opacity-50 bg-transparent-50 w-fit h-fit top-2/3 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-left gap-4 py-10 px-14">
        <h2 className={`relative z-10 ${marcellus.className} text-4xl`}>
          Our most-loved bouquets
        </h2>
        <p className={`relative z-10 ${marcellus.className}`}>
          Best sellers for a reason—send something beautiful today.
        </p>
        <Button variant="shopNow">Shop Now</Button>
      </div>
    </section>
  );
};
export default ExploreFlowersBanner;
