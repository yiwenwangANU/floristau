import { NavigationMenu } from "radix-ui";
import NavItem from "@/components/features/navigation/components/NavItem";
import { NavItemData } from "@/components/features/navigation/NavItemData";

const NaviMenu = () => {
  return (
    <NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
      <NavigationMenu.List className="center m-0 flex list-none rounded-md p-1">
        {NavItemData.map((data) => (
          <NavItem
            key={data.title}
            title={data.title}
            href={data.href}
            itemsList={data.itemsList}
          />
        ))}
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-[scale-out_200ms_ease] data-[state=open]:animate-[scale-in_200ms_ease] sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};
export default NaviMenu;
