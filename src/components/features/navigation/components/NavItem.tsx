import { NavigationMenu } from "radix-ui";
import { CaretDownIcon } from "@radix-ui/react-icons";
import NavListItem from "@/components/features/navigation/components/NavListItem";
import Link from "next/link";

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
  const hasItems = itemsList && itemsList.length > 0;
  if (!hasItems) {
    return (
      <NavigationMenu.Item className="w-full">
        <NavigationMenu.Link
          asChild
          className="capitalize group flex select-none justify-between w-50 gap-0.5 px-5 py-3 text-[15px] font-medium leading-none hover:bg-secondary-hover hover:outline-2 hover:outline-black focus:outline-black focus:outline-2 focus:shadow-[0_0_0_2px]"
        >
          <Link href={href}>{title}</Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }
  return (
    <NavigationMenu.Item className="w-full">
      <NavigationMenu.Trigger
        asChild
        className="capitalize group flex select-none justify-between w-50 gap-0.5 px-5 py-3 text-[15px] font-medium leading-none hover:bg-secondary-hover hover:outline-2 hover:outline-black focus:outline-black focus:outline-2 focus:shadow-[0_0_0_2px]"
      >
        <Link href={href}>
          {title}
          {hasItems && (
            <CaretDownIcon
              className="relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          )}
        </Link>
      </NavigationMenu.Trigger>
      {itemsList.length > 0 && (
        <NavigationMenu.Content
          className="absolute left-0 top-0 w-full bg-secondary
              data-[state=open]:animate-[fade-in_200ms_ease]
              data-[state=closed]:animate-[fade-out_200ms_ease]
              data-[motion=from-start]:animate-[enter-from-left_250ms_ease]
              data-[motion=from-end]:animate-[enter-from-right_250ms_ease]
              data-[motion=to-start]:animate-[exit-to-left_250ms_ease]
              data-[motion=to-end]:animate-[exit-to-right_250ms_ease]"
        >
          <ul className="grid w-full grid-cols-[1fr_1fr_1fr] place-items-center">
            {itemsList.map((item) => (
              <NavListItem key={item.name} href={item.href} title={item.name} />
            ))}
          </ul>
        </NavigationMenu.Content>
      )}
    </NavigationMenu.Item>
  );
};

export default NavItem;
