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
      className={`absolute rounded inset-0 bg-secondary bg-opacity-50 w-fit h-fit  ${
        position === "left" ? "left-1/3" : "right-1/3"
      } flex flex-col justify-center items-left gap-4 py-10 px-14`}
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
