import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const useRemoveFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const updateSearchParams = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name, value);
    return params.toString();
  };
  const removeFilter = (name: string, value: string) => {
    router.push(pathname + "?" + updateSearchParams(name, value));
  };
  return { removeFilter };
};
export default useRemoveFilter;
