import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useHandleCheck = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryString = (name: string, item: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(name);
    if (!checked) params.append(name, item);

    return params.toString();
  };
  const handleCheck = (name: string, item: string, checked: boolean) => {
    router.push(pathname + "?" + updateQueryString(name, item, checked));
  };

  return { handleCheck };
};
export default useHandleCheck;
