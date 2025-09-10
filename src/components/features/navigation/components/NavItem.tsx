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
    <NavigationMenu.Item className="w-full">
      <NavigationMenu.Trigger className="group flex select-none justify-between gap-0.5 px-3 py-2 text-[15px] font-medium leading-none hover:bg-secondary-hover hover:outline-2 hover:outline-black focus:outline-black focus:outline-2 focus:shadow-[0_0_0_2px]">
        {title}
        {itemsList.length > 0 && (
          <CaretDownIcon
            className="relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
            aria-hidden
          />
        )}
      </NavigationMenu.Trigger>
      {itemsList.length > 0 && (
        <NavigationMenu.Content
          className="absolute left-0 top-0 w-full sm:w-auto
              data-[state=open]:animate-[fade-in_200ms_ease]
              data-[state=closed]:animate-[fade-out_200ms_ease]
              data-[motion=from-start]:animate-[enter-from-left_250ms_ease]
              data-[motion=from-end]:animate-[enter-from-right_250ms_ease]
              data-[motion=to-start]:animate-[exit-to-left_250ms_ease]
              data-[motion=to-end]:animate-[exit-to-right_250ms_ease]"
        >
          <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
            {itemsList.map((item) => (
              <NavListItem
                key={item.name}
                href={item.href}
                title={item.name}
                className="hover:bg-secondary-hover"
              />
            ))}
          </ul>
        </NavigationMenu.Content>
      )}
    </NavigationMenu.Item>
  );
};

export default NavItem;
