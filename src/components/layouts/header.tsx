import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Navigation from "../ui/Navigation";
import CartButton from "../features/cart/CartButton";

const Header = () => {
  return (
    <header className="fixed bg-secondary px-12 flex flex-row items-center justify-between z-50 w-full">
      <Link href="/">
        <Image src="/next.svg" alt="Logo" width={100} height={100} />
      </Link>
      <Navigation />
      <CartButton />
    </header>
  );
};

export default Header;
