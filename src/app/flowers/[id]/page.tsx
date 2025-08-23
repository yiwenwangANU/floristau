import FlowerPageClient from "./FlowerPageClient";

export default function Page({ params }: { params: { id: string } }) {
  return <FlowerPageClient id={params.id} />;
}
