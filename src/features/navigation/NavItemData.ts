import {
  FILTER_OPTIONS_MULTI,
  FILTER_OPTIONS,
  FILTER_OPTIONS_PLANT,
} from "@/features/filter/FilterOptions";

const flowerTypeValues =
  FILTER_OPTIONS_MULTI.find((fo) => fo.option == "flowerType")?.filterValues ??
  [];

const occasionTypeValues =
  FILTER_OPTIONS.find((fo) => fo.option == "occasion")?.filterValues ?? [];

const plantTypeValues =
  FILTER_OPTIONS_PLANT.find((fo) => fo.option == "PlantType")?.filterValues ??
  [];
export const NavItemData = [
  {
    title: "flowers",
    href: "/flowers",
    itemsList: [
      {
        href: "/flowers",
        name: "All Flowers",
      },
      {
        href: "/flowers/?featured=true",
        name: "Best Sellers",
      },
      ...flowerTypeValues?.map((f) => ({
        href: `/flowers/?flowerType=${f.value}`,
        name: f.label,
      })),
    ],
  },
  {
    title: "birthday",
    href: "flowers/?occasion=birthday",
    itemsList: [],
  },
  {
    title: "sympathy",
    href: "flowers/?occasion=sympathy",
    itemsList: [],
  },
  {
    title: "occasions",
    href: "/flowers",
    itemsList: [
      ...occasionTypeValues?.map((f) => ({
        href: `/flowers/?occasion=${f.value}`,
        name: f.label,
      })),
    ],
  },
  {
    title: "plants",
    href: "/plants",
    itemsList: [
      { href: "/plants", name: "All Plants" },
      ...plantTypeValues?.map((f) => ({
        href: `/plants/?plantType=${f.value}`,
        name: f.label,
      })),
    ],
  },
  {
    title: "dry flowers",
    href: "/flowers?productType=driedflower",
    itemsList: [],
  },
];
