import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Navigation from "../ui/Navigation";

const Header = () => {
  return (
    <header className="bg-muted p-4 flex flex-row items-center justify-between">
      <Link href="/">
        <Image src="/next.svg" alt="Logo" width={100} height={100} />
      </Link>
      <Navigation />
      <h1>Login</h1>
    </header>
  );
};

export default Header;
