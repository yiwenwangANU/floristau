import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Card from "@/components/ui/Card";
import CardWithWords from "@/components/ui/CardWithWords";
import CardWithWordsSec from "@/components/ui/CardWithWordsSec";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main>
        <Image
          src="/MRxTAB_banner_web_v1_8ab0ef35-a22d-4804-9914-29996babacd1_1920x.jpg"
          alt="Red Flowers"
          width={600}
          height={500}
          className="w-full h-auto"
        />
        <div className="text-4xl pt-20 pb-2 px-8 font-sans font-medium">
          Our Best Selling Flowers
        </div>
        <div className="flex flex-row flex-wrap gap-8 py-5 px-8 items-center">
          <Card title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card title="Red Flowers" price="$19.99" image="/1.jpg" />
        </div>
        <div className="text-4xl font-medium my-4">
          Choose your Flowers by occasions
        </div>

        <div className="flex flex-row flex-wrap gap-2">
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
        <div className="flex flex-row flex-wrap gap-2">
          <CardWithWordsSec title="Red" image="/2.jpg" color="red" />
          <CardWithWordsSec title="Green" image="/3.jpg" color="green" />
          <CardWithWordsSec title="White" image="/4.jpg" color="gray" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
