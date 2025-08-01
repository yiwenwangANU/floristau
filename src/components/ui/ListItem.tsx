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
            "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-violet12">
            {title}
          </div>
          <p className="leading-[1.4] text-mauve11">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
ListItem.displayName = "ListItem";
export default ListItem;
