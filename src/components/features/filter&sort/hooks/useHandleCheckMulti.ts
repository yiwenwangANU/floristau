import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useHandleCheckMulti = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryString = (
    name: string,
    item: { label: string; value: string },
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(name);
    params.append(name, item.value);

    return params.toString();
  };
  const handleCheck = (
    name: string,
    item: { label: string; value: string },
  ) => {
    router.push(pathname + "?" + updateQueryString(name, item));
  };

  return { handleCheck };
};
export default useHandleCheckMulti;
