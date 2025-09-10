import CartButton from "@/components/features/cart/components/CartButton";
import Logo from "@/components/features/navigation/components/Logo";
import NaviMenu from "@/components/features/navigation/components/NaviMenu";
import NavigationMenuDemo from "./Demo";

const Navigation = () => {
  return (
    <header className="fixed bg-secondary px-12 flex flex-row items-center justify-between z-50 w-full">
      <Logo />
      <NavigationMenuDemo />
      <CartButton />
    </header>
  );
};
export default Navigation;
