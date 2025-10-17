import { useAppSelector } from "@/redux/hooks";
import ProductCardInCheckout from "./ProductCardInCheckout";
import CartSubtotalCheckout from "./CartSubtotalCheckout";

export default function ProductsSummary() {
  const { items } = useAppSelector((s) => {
    const items = s.cart.cartState.items;
    return { items };
  });
  return (
    <div className="py-10">
      {items.map((item) => (
        <ProductCardInCheckout
          key={item.id}
          name={item.name}
          size={item.size}
          price={item.price}
          imageUrl={item.imageUrl}
          giftQty={item.giftQty}
        />
      ))}
      <CartSubtotalCheckout />
    </div>
  );
}
