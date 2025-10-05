import Link from "next/link";
import Button from "@/components/ui/Button";

const BannerButton = ({ name, link }: { name: string; link: string }) => {
  return (
    <Button variant="blackRounded">
      <Link href={link}>{name}</Link>
    </Button>
  );
};
export default BannerButton;
