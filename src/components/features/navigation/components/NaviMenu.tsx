import { NavigationMenu, Portal } from "radix-ui";

import NavItem from "@/components/features/navigation/components/NavItem";
import { NavItemData } from "@/components/features/navigation/NavItemData";

const NaviMenu = () => {
  return (
    <NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
      <NavigationMenu.List className="center m-0 flex list-none rounded-md p-1 w-full">
        {NavItemData.map((data) => (
          <NavItem
            key={data.title}
            title={data.title}
            href={data.href}
            itemsList={data.itemsList}
          />
        ))}
      </NavigationMenu.List>
      <Portal.Root>
        <div className="fixed left-0 top-[var(--header-h)] w-screen z-40">
          <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-screen origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-[scale-out_200ms_ease] data-[state=open]:animate-[scale-in_200ms_ease]" />
        </div>
      </Portal.Root>
    </NavigationMenu.Root>
  );
};
export default NaviMenu;
