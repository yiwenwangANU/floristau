import useGetChocolate from "@/hooks/useGetChocolate";
import useGetTeddy from "@/hooks/useGetTeddys";
import useGetWine from "@/hooks/useGetWine";
import { GetGiftsResponse } from "@/libs/types/gifts";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Accordion } from "radix-ui";
import Image from "next/image";
import NumberStepper from "@/components/form/NumberStepper";
import { useDispatch } from "react-redux";
import { updateGiftQty } from "@/redux/CartSlice";

const CartManageGift = ({cartId}: {cartId: string}) => {
    const {
    data: wineData,
    isPending: wineIsPending,
    isError: wineIsError,
  } = useGetWine();
  const {
    data: chocolateData,
    isPending: chocolateIsPending,
    isError: chocolateError,
  } = useGetChocolate();
  const {
    data: teddyData,
    isPending: teddyIsPending,
    isError: teddyError,
  } = useGetTeddy();

  if ( wineIsPending || chocolateIsPending || teddyIsPending)
    return <Loading />;
  if (
    wineIsError ||
    !wineData ||
    !chocolateData ||
    chocolateError ||
    !teddyData ||
    teddyError
  )
    return <ErrorPage />;

  type GiftType = "wine" | "chocolate" | "teddy";
  const categories: {
    type: GiftType;
    label: string;
    data: GetGiftsResponse;
  }[] = [
    { type: "wine", label: "Add Wine", data: wineData },
    { type: "chocolate", label: "Add Chocolate", data: chocolateData },
    { type: "teddy", label: "Add Teddy Bear", data: teddyData },
  ];
  const dispatch = useDispatch();
  return (
    <Accordion.Root
      className=""
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {categories.map(({ label, type, data }) => (
        <AccordionItem key={type} value={`item-${type}`}>
          <AccordionTrigger className="text-xl pt-5 pb-10 capitalize">
            {label}
          </AccordionTrigger>
          <AccordionContent>
            {data.map((item, i) => (
              <div className="border p-4 rounded flex flex-row justify-between items-center my-2">
                <Image src={item.imageUrl} alt={item.name} width={40} height={40} />
                <h2 className="text-lg font-bold">{name}</h2>
                <div className="flex flex-row items-center gap-4">
                  <p className="text-lg font-bold">${item.price}</p>
                  
                      <NumberStepper
                value={item.qty}
                onChange={(qty) =>
                  dispatch(
                    updateGiftQty({
                      id: cartId,
                      type: item.type,
                      giftName: item.name,
                      giftQty: qty,
                    })
                  )
                }
              />
                  />
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion.Root>
  );
};
export default CartManageGift;
