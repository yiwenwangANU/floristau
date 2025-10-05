import { NavigationMenu } from "radix-ui";
import React from "react";

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
};

const NavListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ title, className = "", ...props }, ref) => (
    <li className="w-full">
      <NavigationMenu.Link asChild>
        <a
          ref={ref}
          {...props}
          className={[
            // layout & baseline border
            "relative mx-20 mb-8 block w-full border-b-2 border-gray-200 px-5 py-3 text-[15px] transition-colors select-none",
            // animated overlay line (exact same width & position as the border)
            "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2",
            "after:origin-center after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-['']",
            // trigger animation when hovering the whole block
            "hover:after:scale-x-100",
            className,
          ].join(" ")}
        >
          <span className="block leading-[1.2] font-semibold">{title}</span>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);

NavListItem.displayName = "NavListItem";
export default NavListItem;
