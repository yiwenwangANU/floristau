import ExploreFlowersBanner from "@/components/features/banner/components/ExploreFlowersBanner";
import Card from "@/components/ui/Card";
import CardWithWords from "@/components/ui/CardWithWords";
import CardWithWordsSec from "@/components/ui/CardWithWordsSec";
import ShopLocation from "@/components/ui/ShopLocation";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main>
        <ExploreFlowersBanner />
        <div className="text-2xl sm:text-4xl pt-20 pb-2 px-1 sm:px-8 font-sans font-medium">
          Our Best Selling Flowers
        </div>
        <div className="flex flex-row flex-wrap gap-8 py-5 px-1 sm:px-8 items-center">
          <Card id={1} title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card id={2} title="Blue Flowers" price="$29.99" image="/2.jpg" />
          <Card id={3} title="Yellow Flowers" price="$39.99" image="/3.jpg" />
          <Card id={4} title="White Flowers" price="$49.99" image="/4.jpg" />
        </div>
        <div className="text-2xl sm:text-4xl pt-20 pb-2 px-1 sm:px-8 font-sans font-medium">
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
        <ShopLocation />
      </main>
    </div>
  );
}
