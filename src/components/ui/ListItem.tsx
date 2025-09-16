import { NavigationMenu } from "radix-ui";
import React from "react";
import classNames from "classnames";

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  children: React.ReactNode;
};
const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "block rounded-md p-3 text-[15px] leading-none no-underline transition-colors outline-none select-none focus:shadow-[0_0_0_2px]",
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] leading-[1.2] font-medium">{title}</div>
          <p className="leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);
ListItem.displayName = "ListItem";
export default ListItem;
