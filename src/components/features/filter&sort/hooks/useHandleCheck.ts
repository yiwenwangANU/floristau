import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useHandleCheck = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryString = (name: string, item: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(name);
    params.append(name, item);

    return params.toString();
  };
  const handleCheck = (name: string, item: string) => {
    router.push(pathname + "?" + updateQueryString(name, item));
  };

  return { handleCheck };
};
export default useHandleCheck;
