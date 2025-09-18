import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useHandleCheckMulti = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryString = (
    name: string,
    item: { label: string; value: string },
    checked: boolean,
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(name, item.value);
    if (!checked) params.append(name, item.value);

    return params.toString();
  };
  const handleCheck = (
    name: string,
    item: { label: string; value: string },
    checked: boolean,
  ) => {
    router.push(pathname + "?" + updateQueryString(name, item, checked));
  };

  return { handleCheck };
};
export default useHandleCheckMulti;
