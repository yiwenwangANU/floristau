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
            "relative block w-full mx-20 mb-8 px-5 py-3 border-b-2 border-gray-200 select-none text-[15px] transition-colors",
            // animated overlay line (exact same width & position as the border)
            "after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-full after:-translate-x-1/2",
            "after:bg-black after:content-[''] after:origin-center after:scale-x-0 after:transition-transform after:duration-300",
            // trigger animation when hovering the whole block
            "hover:after:scale-x-100",
            className,
          ].join(" ")}
        >
          <span className="block font-semibold leading-[1.2]">{title}</span>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

NavListItem.displayName = "NavListItem";
export default NavListItem;
