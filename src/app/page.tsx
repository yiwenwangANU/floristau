import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
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
      </main>
      <Footer />
    </div>
  );
}
