import * as React from "react";
import { NavigationMenu } from "radix-ui";
import { CaretDownIcon } from "@radix-ui/react-icons";
import ListItem from "./ListItem";

const Navigation = () => {
  return (
    <NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
      <NavigationMenu.List className="flex rounded-md p-1 gap-1">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="px-20 py-4 block select-none rounded text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-secondary-hover focus:shadow-[0_0_0_2px] focus:shadow-violet7"
            href="https://github.com/radix-ui"
          >
            Flowers
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="px-20 py-4 group flex select-none items-center justify-between gap-0.5 rounded text-[15px] font-medium leading-none outline-none hover:bg-secondary-hover focus:shadow-[0_0_0_2px]">
            Occasions
            <CaretDownIcon
              className="relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-[20px] sm:w-[100vh] sm:grid-cols-[1fr_1fr_1fr] bg-secondary ">
              <ListItem
                href="https://stitches.dev/"
                title="Wedding"
                className="hover:bg-secondary-hover"
              >
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem
                href="/colors"
                title="Birthday"
                className="hover:bg-secondary-hover"
              >
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem
                href="https://icons.radix-ui.com/"
                title="Thank You"
                className="hover:bg-secondary-hover"
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem
                href="https://icons.radix-ui.com/"
                title="Get Well"
                className="hover:bg-secondary-hover"
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem
                href="https://icons.radix-ui.com/"
                title="Funeral"
                className="hover:bg-secondary-hover"
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem
                href="https://icons.radix-ui.com/"
                title="New Baby"
                className="hover:bg-secondary-hover"
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="px-20 py-4 group flex select-none items-center justify-between gap-0.5 rounded text-[15px] font-medium leading-none outline-none hover:bg-secondary-hover focus:shadow-[0_0_0_2px]">
            Color
            <CaretDownIcon
              className="relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[100vh] sm:grid-cols-[1fr_1fr_1fr] bg-secondary">
              <ListItem href="https://stitches.dev/" title="Red">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="/colors" title="Pink">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Green">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="White">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Purple">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Mixed Colors">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="px-20 py-4 block select-none rounded text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-secondary-hover focus:shadow-[0_0_0_2px] focus:shadow-violet7"
            href="https://github.com/radix-ui"
          >
            Plants
          </NavigationMenu.Link>
        </NavigationMenu.Item>

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

export default Navigation;
