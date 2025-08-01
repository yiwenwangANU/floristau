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
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
ListItem.displayName = "ListItem";
export default ListItem;
