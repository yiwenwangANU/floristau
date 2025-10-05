import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
      <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px]">
        <NavigationMenu.Item className="w-full">
          <NavigationMenu.Trigger className="group text-violet11 hover:bg-violet3 focus:shadow-violet7 flex items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] leading-none font-medium outline-none select-none focus:shadow-[0_0_0_2px]">
            Learn{" "}
            <CaretDownIcon
              className="text-violet10 relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full data-[motion=from-end]:animate-[enter-from-right_250ms_ease] data-[motion=from-start]:animate-[enter-from-left_250ms_ease] data-[motion=to-end]:animate-[exit-to-right_250ms_ease] data-[motion=to-start]:animate-[exit-to-left_250ms_ease] data-[state=closed]:animate-[fade-out_200ms_ease] data-[state=open]:animate-[fade-in_200ms_ease] sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <Link
                    className="from-purple9 to-indigo9 focus:shadow-violet7 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-[25px] no-underline outline-none select-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mt-4 mb-[7px] text-[18px] leading-[1.2] font-medium text-white">
                      Radix Primitives
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group text-violet11 hover:bg-violet3 focus:shadow-violet7 flex items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] leading-none font-medium outline-none select-none focus:shadow-[0_0_0_2px]">
            Overview{" "}
            <CaretDownIcon
              className="text-violet10 relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block rounded px-3 py-2 text-[15px] leading-none font-medium no-underline outline-none select-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute top-full left-0 flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-[scale-out_200ms_ease] data-[state=open]:animate-[scale-in_200ms_ease] sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = ({
  className,
  children,
  title,
  ...props
}: React.ComponentProps<typeof Link>) => (
  <li>
    <NavigationMenu.Link asChild>
      <Link
        className={classNames(
          "hover:bg-mauve3 focus:shadow-violet7 block rounded-md p-3 text-[15px] leading-none no-underline transition-colors outline-none select-none focus:shadow-[0_0_0_2px]",
          className,
        )}
        {...props}
      >
        <div className="text-violet12 mb-[5px] leading-[1.2] font-medium">
          {title}
        </div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </Link>
    </NavigationMenu.Link>
  </li>
);

ListItem.displayName = "ListItem";
export default NavigationMenuDemo;
