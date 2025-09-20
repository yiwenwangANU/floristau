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
      {
        href: "/flowers/?flowerType=1",
        name: "Roses",
      },
      {
        href: "/flowers/?flowerType=7",
        name: "Lilies",
      },
      {
        href: "/flowers/flowerType=9",
        name: "Sunflowers",
      },
      {
        href: "/flowers/?flowerType=6",
        name: "Orchids",
      },
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
      {
        href: "/flowers/?occasion=birthday",
        name: "Birthday",
      },
      {
        href: "/flowers/?occasion=graduation",
        name: "Graduation",
      },
      {
        href: "/flowers/?occasion=anniversary",
        name: "Anniversary",
      },
      { href: "/flowers/?occasion=wedding", name: "Wedding" },
      {
        href: "/flowers/?occasion=new-baby",
        name: "New Baby",
      },
      {
        href: "/flowers/?occasion=thankyou",
        name: "Thank You",
      },
      {
        href: "/flowers/?occasion=getwell",
        name: "Get Well",
      },
      {
        href: "/occasflowersions/?occasion=sympathy",
        name: "Sympathy",
      },
      { href: "/flowers/?occasion=funeral", name: "Funeral" },
    ],
  },
  {
    title: "plants",
    href: "/plants",
    itemsList: [
      { href: "/plants", name: "All Plants" },
      { href: "/plants/?planttype=succulents", name: "Succulents" },
      { href: "/plants/?planttype=terrarium", name: "Terrarium" },
      { href: "/plants/?planttype=floweringPlants", name: "Flowering Plants" },
      { href: "/plants/?planttype=green", name: "Green Plants" },
    ],
  },
  {
    title: "dry flowers",
    href: "/dryflowers",
    itemsList: [],
  },
];
