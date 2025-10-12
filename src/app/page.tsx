import ShopLocation from "@/components/ui/ShopLocation";
import Button from "@/components/ui/Button";
import { Raleway } from "next/font/google";
import Link from "next/link";
import Banner from "@/components/banner/Banner";
import FlowerGrid from "@/features/products/flower/components/FlowerGrid";
const raleway = Raleway({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main>
        <Banner
          imageUrl="/1014_PF_Fall25-Site_Fall_Hero.webp"
          headline="Our most-loved bouquets"
          description="Best sellers for a reason—send something beautiful today."
          name="Shop Now"
          link="/flowers"
          position="right"
        />
        <div
          className={`px-1 pt-20 pb-2 font-sans text-2xl font-medium sm:px-8 sm:text-4xl ${raleway.className}`}
        >
          Our Best Selling Flowers
        </div>
        <div className="flex flex-row flex-wrap items-center gap-8 px-1 py-5 sm:px-8">
          <FlowerGrid />
        </div>
        <Link href="/flowers" className="flex justify-center pt-6 pb-14">
          <Button variant="blackLong">Shop Now</Button>
        </Link>
        <Banner
          imageUrl="/1014_PF_Fall25-Site_Anniversary_Hero.webp"
          headline="Shop by Occasions"
          description="Find the perfect bouquet for every special moment—birthdays, anniversaries, celebrations, and more."
          name="Browse Occasions"
          link="/occasions"
          position="left"
        />
        <div
          className={`px-1 pt-20 pb-2 font-sans text-2xl font-medium sm:px-8 sm:text-4xl ${raleway.className}`}
        >
          Choose your Flowers by Occasions
        </div>
        <div className="flex flex-row flex-wrap items-center gap-8 px-1 py-5 sm:px-8">
          <FlowerGrid />
        </div>
        <Link href="/occasions" className="flex justify-center pt-6 pb-14">
          <Button variant="blackLong">Browse by Occasions</Button>
        </Link>
        <Banner
          imageUrl="/0908_Bouqsday_HPUpdate_Desktop.jpg"
          headline="Shop by Flower Types"
          description="Choose from roses, lilies, tulips, and more—discover bouquets made from your favorite blooms."
          name="Explore Flowers"
          link="/flowers/types"
          position="left"
        />
        <div
          className={`px-1 pt-20 pb-2 font-sans text-2xl font-medium sm:px-8 sm:text-4xl ${raleway.className}`}
        >
          Choose Your Flowers by Types
        </div>
        <div className="flex flex-row flex-wrap items-center gap-8 px-1 py-5 sm:px-8">
          <FlowerGrid />
        </div>
        <Link href="/flowers" className="flex justify-center pt-6 pb-14">
          <Button variant="blackLong">Explore Flowers by Types</Button>
        </Link>
        <ShopLocation />
      </main>
    </div>
  );
}
