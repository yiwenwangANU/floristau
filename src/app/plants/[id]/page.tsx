import PlantPageClient from "./PlantPageClient";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <PlantPageClient id={id} />;
}
