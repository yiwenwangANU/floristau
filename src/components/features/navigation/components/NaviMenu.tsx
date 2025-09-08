import { NavigationMenu } from "radix-ui";
import NavItem from "@/components/features/navigation/components/NavItem";
import { NavItemData } from "@/components/features/navigation/NavItemData";

const NaviMenu = () => {
  return (
    <NavigationMenu.Root className="relative z-[9999] flex w-screen justify-center">
      <NavigationMenu.List className="flex rounded-md p-1 gap-1">
        {NavItemData.map((data) => (
          <NavItem
            key={data.title}
            title={data.title}
            href={data.href}
            itemsList={data.itemsList}
          />
        ))}

        <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};
export default NaviMenu;
