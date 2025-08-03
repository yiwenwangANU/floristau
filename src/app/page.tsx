import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Card from "@/components/ui/Card";
import CardWithWords from "@/components/ui/CardWithWords";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1 p-4">
        <Image
          src="/MRxTAB_banner_web_v1_8ab0ef35-a22d-4804-9914-29996babacd1_1920x.jpg"
          alt="Red Flowers"
          width={600}
          height={400}
          className="w-full h-auto"
        />
        <div className="flex flex-row gap-2">
          <Card title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card title="Red Flowers" price="$19.99" image="/1.jpg" />
          <Card title="Red Flowers" price="$19.99" image="/1.jpg" />
        </div>
        <div>Choose your Flowers by occasions</div>

        <div className="flex flex-row gap-2">
          <CardWithWords
            title="Birthday"
            content="Striking patterns, vibrant hues, and unusual designs."
            image="/2.jpg"
            color="blue"
            textColor="white"
          />
          <CardWithWords
            title="Birthday"
            content="Striking patterns, vibrant hues, and unusual designs."
            image="/2.jpg"
            color="red"
            textColor="white"
          />
          <CardWithWords
            title="Birthday"
            content="Striking patterns, vibrant hues, and unusual designs."
            image="/2.jpg"
            color="green"
            textColor="white"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
