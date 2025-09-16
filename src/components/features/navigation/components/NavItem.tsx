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
          className="group hover:bg-secondary-hover flex w-50 justify-between gap-0.5 px-5 py-3 text-[15px] leading-none font-medium capitalize select-none hover:outline-2 hover:outline-black focus:shadow-[0_0_0_2px] focus:outline-2 focus:outline-black"
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
        className="group hover:bg-secondary-hover flex w-50 justify-between gap-0.5 px-5 py-3 text-[15px] leading-none font-medium capitalize select-none hover:outline-2 hover:outline-black focus:shadow-[0_0_0_2px] focus:outline-2 focus:outline-black"
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
        <NavigationMenu.Content className="bg-secondary absolute top-0 left-0 w-full data-[motion=from-end]:animate-[enter-from-right_250ms_ease] data-[motion=from-start]:animate-[enter-from-left_250ms_ease] data-[motion=to-end]:animate-[exit-to-right_250ms_ease] data-[motion=to-start]:animate-[exit-to-left_250ms_ease] data-[state=closed]:animate-[fade-out_200ms_ease] data-[state=open]:animate-[fade-in_200ms_ease]">
          <ul className="grid w-full grid-cols-[1fr_1fr_1fr] gap-x-10 pt-10">
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
