import Spinner from "@/components/ui/Spinner";

function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner />
      <div className="text-xl text-gray-500">Loading flower...</div>
    </div>
  );
}

export default loading;
