import CartButton from "@/components/features/cart/components/CartButton";
import Logo from "@/components/features/navigation/components/Logo";
import NaviMenu from "@/components/features/navigation/components/NaviMenu";

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
