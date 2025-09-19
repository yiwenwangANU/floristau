import Banner from "@/components/features/banner/components/Banner";
import Card from "@/components/features/flowers/FlowerCard";
import ShopLocation from "@/components/ui/ShopLocation";
import Button from "@/components/ui/Button";
import { Raleway } from "next/font/google";
import Link from "next/link";
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
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
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
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
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
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
        </div>
        <Link href="/flowers" className="flex justify-center pt-6 pb-14">
          <Button variant="blackLong">Explore Flowers by Types</Button>
        </Link>
        <ShopLocation />
        {/* <div
          className="relative text-2xl text-violet1 sm:text-4xl pt-20 pb-2 px-1 sm:px-8 font-sans font-medium
             after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-full
             after:-translate-x-1/2 after:bg-black after:content-['']
             after:origin-center after:scale-x-0 after:transition-transform after:duration-300
             hover:after:scale-x-100"
        >
          Choose your Flowers by Occasions
        </div>

        <div className="flex flex-row flex-wrap gap-2 py-5 px-1 sm:px-8 items-center">
          <CardWithWords
            title="Birthday"
            content="Striking patterns, vibrant hues, and unusual designs."
            image="/5.jpg"
            color="pink"
          />
          <CardWithWords
            title="Sympathy"
            content="Striking patterns, vibrant hues, and unusual designs."
            image="/3.jpg"
            color="yellow"
          />
          <CardWithWords
            title="Newborn"
            content="Striking patterns, vibrant hues, and unusual designs."
            image="/4.jpg"
            color="green"
          />
        </div>
        <div className="text-2xl sm:text-4xl pt-20 pb-2 px-1 sm:px-8 font-sans font-medium">
          Choose your Flowers by Color
        </div>
        <div className="flex flex-row flex-wrap gap-2 px-1 sm:px-8 py-7">
          <CardWithWordsSec title="Red" image="/2.jpg" color="red" />
          <CardWithWordsSec title="Green" image="/3.jpg" color="green" />
          <CardWithWordsSec title="White" image="/4.jpg" color="gray" />
        </div> */}
      </main>
    </div>
  );
}
