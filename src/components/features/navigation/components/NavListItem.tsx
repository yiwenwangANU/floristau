import { NavigationMenu } from "radix-ui";
import React from "react";

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
};
const NavListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className="select-none text-[15px] transition-colors"
          {...props}
          ref={forwardedRef}
        >
          <div
            className="text-xl font-medium leading-[1.2] relative inline-block my-8 text-center
            border-b-2 border-gray-200
            after:absolute after:left-1/2 after:-bottom-1 after:h-[2px]
           after:w-full after:-translate-x-1/2 after:bg-black after:content-[''] after:origin-center
            after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {title}
          </div>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
NavListItem.displayName = "NavListItem";
export default NavListItem;
