import Spinner from "@/components/ui/Spinner";

function loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner />
      <div className="text-xl text-gray-500">Loading flower...</div>
    </div>
  );
}

export default loading;
