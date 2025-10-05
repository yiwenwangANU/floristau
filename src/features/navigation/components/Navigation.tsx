import CartButton from "@/features/cart/components/CartButton";
import Logo from "@/features/navigation/components/Logo";
import NaviMenu from "@/features/navigation/components/NaviMenu";

const Navigation = () => {
  return (
    <header className="bg-secondary fixed z-50 flex h-[var(--header-h)] w-full flex-row items-center justify-between px-12">
      <Logo />
      <NaviMenu />
      <CartButton />
    </header>
  );
};
export default Navigation;
