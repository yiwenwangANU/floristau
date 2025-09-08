import Button from "@/components/ui/Button";
import Link from "next/link";
const BannerButton = ({ name, link }: { name: string; link: string }) => {
  return (
    <Button variant="blackRounded">
      <Link href={link}>{name}</Link>
    </Button>
  );
};
export default BannerButton;
