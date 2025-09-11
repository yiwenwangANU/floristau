import Banner from "@/components/features/banner/components/Banner";
import Card from "@/components/ui/Card";
import CardWithWords from "@/components/ui/CardWithWords";
import CardWithWordsSec from "@/components/ui/CardWithWordsSec";
import ShopLocation from "@/components/ui/ShopLocation";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
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
          className={`text-2xl sm:text-4xl pt-20 pb-2 px-1 sm:px-8 font-sans font-medium ${raleway.className}`}
        >
          Our Best Selling Flowers
        </div>
        <div className="flex flex-row flex-wrap gap-8 py-5 px-1 sm:px-8 items-center">
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
        </div>
        <Banner
          imageUrl="/1014_PF_Fall25-Site_Anniversary_Hero.webp"
          headline="Shop by Occasions"
          description="Find the perfect bouquet for every special moment—birthdays, anniversaries, celebrations, and more."
          name="Browse Occasions"
          link="/occasions"
          position="left"
        />
        <div
          className={`text-2xl sm:text-4xl pt-20 pb-2 px-1 sm:px-8 font-sans font-medium ${raleway.className}`}
        >
          Choose your Flowers by Occasions
        </div>
        <div className="flex flex-row flex-wrap gap-8 py-5 px-1 sm:px-8 items-center">
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
        </div>
        <Banner
          imageUrl="/0908_Bouqsday_HPUpdate_Desktop.jpg"
          headline="Shop by Flower Types"
          description="Choose from roses, lilies, tulips, and more—discover bouquets made from your favorite blooms."
          name="Explore Flowers"
          link="/flowers/types"
          position="left"
        />
        <div
          className={`text-2xl sm:text-4xl pt-20 pb-2 px-1 sm:px-8 font-sans font-medium ${raleway.className}`}
        >
          Choose Your Flowers by Types
        </div>
        <div className="flex flex-row flex-wrap gap-8 py-5 px-1 sm:px-8 items-center">
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
        </div>
        <ShopLocation />
        <div
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
        </div>
      </main>
    </div>
  );
}
