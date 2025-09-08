import { CaretDownIcon } from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";
import NavListItem from "./NavListItem";

type itemsListProps = {
  href: string;
  name: string;
  description: string;
}[];
const NavItem = ({
  title,
  itemsList,
}: {
  title: string;
  itemsList: itemsListProps;
}) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className="px-20 py-4 group flex select-none items-center justify-between gap-0.5 rounded text-[15px] font-medium leading-none outline-none hover:bg-secondary-hover focus:shadow-[0_0_0_2px]">
        {title}
        <CaretDownIcon
          className="relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
          aria-hidden
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
        <ul className="one m-0 grid list-none gap-x-2.5 p-[20px] sm:w-[100vh] sm:grid-cols-[1fr_1fr_1fr] bg-secondary ">
          {itemsList.map((item) => (
            <NavListItem
              key={item.name}
              href={item.href}
              title={item.name}
              className="hover:bg-secondary-hover"
            >
              {item.description}
            </NavListItem>
          ))}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

export default NavItem;
