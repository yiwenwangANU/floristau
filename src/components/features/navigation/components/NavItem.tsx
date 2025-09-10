import { NavigationMenu } from "radix-ui";
import { CaretDownIcon } from "@radix-ui/react-icons";
import NavListItem from "@/components/features/navigation/components/NavListItem";

type itemsListProps = {
  href: string;
  name: string;
}[];
const NavItem = ({
  title,
  href,
  itemsList,
}: {
  title: string;
  href: string;
  itemsList: itemsListProps;
}) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className="px-20 py-4 group flex select-none items-center justify-between text-[15px] font-medium leading-none hover:bg-secondary-hover hover:outline-2 hover:outline-black focus:outline-black focus:outline-2 focus:shadow-[0_0_0_2px]">
        {title}
        <CaretDownIcon
          className="relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
          aria-hidden
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="absolute left-0 top-full bg-secondary">
        <div className="w-screen">
          <ul
            className="
        grid grid-cols-3 
        list-none m-0 p-5 gap-4
      "
          >
            {itemsList.map((item) => (
              <NavListItem
                key={item.name}
                href={item.href}
                title={item.name}
                className="hover:bg-secondary-hover"
              />
            ))}
          </ul>
        </div>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

export default NavItem;
