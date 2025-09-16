import BannerButton from "@/components/features/banner/components/BannerButton";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({ weight: ["400"], subsets: ["latin"] });
const BannerCard = ({
  headline,
  description,
  name,
  link,
  position,
}: {
  headline: string;
  description: string;
  name: string;
  link: string;
  position: "left" | "right";
}) => {
  return (
    <div
      className={`bg-secondary bg-opacity-50 absolute inset-0 h-fit w-fit rounded ${
        position === "left" ? "left-[23%]" : "left-[72%]"
      } items-left top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col justify-center gap-4 px-14 py-10`}
    >
      <h2 className={`relative z-10 ${marcellus.className} text-4xl`}>
        {headline}
      </h2>
      <p className={`relative z-10 ${marcellus.className}`}>{description}</p>
      <BannerButton name={name} link={link} />
    </div>
  );
};
export default BannerCard;
