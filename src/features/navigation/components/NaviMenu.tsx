import { NavigationMenu, Portal } from "radix-ui";
import NavItem from "@/features/navigation/components/NavItem";
import { NavItemData } from "@/features/navigation/NavItemData";

const NaviMenu = () => {
  return (
    <NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
      <NavigationMenu.List className="center m-0 flex w-full list-none rounded-md p-1">
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
        <div className="fixed top-[var(--header-h)] left-0 z-40 w-screen">
          <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-screen origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-[scale-out_200ms_ease] data-[state=open]:animate-[scale-in_200ms_ease]" />
        </div>
      </Portal.Root>
    </NavigationMenu.Root>
  );
};
export default NaviMenu;
