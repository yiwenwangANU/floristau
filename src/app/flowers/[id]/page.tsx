import FlowerPageClient from "./FlowerPageClient";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <FlowerPageClient id={id} />;
}
