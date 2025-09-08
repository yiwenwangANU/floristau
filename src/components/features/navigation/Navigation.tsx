import CartButton from "@/components/features/cart/components/CartButton";
import Logo from "@/components/features/navigation/Logo";
import NaviMenu from "@/components/features/navigation/NaviMenu";

const Navigation = () => {
  return (
    <header className="fixed bg-secondary px-12 flex flex-row items-center justify-between z-50 w-full">
      <Logo />
      <NaviMenu />
      <CartButton />
    </header>
  );
};
export default Navigation;
