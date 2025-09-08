import { NavigationMenu } from "radix-ui";
import React from "react";
import classNames from "classnames";

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
};
const NavListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2]">{title}</div>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
NavListItem.displayName = "NavListItem";
export default NavListItem;
