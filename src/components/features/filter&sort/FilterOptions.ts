type FilterOption = {
  option: string;
  filterValues: { label: string; value: string }[];
};
export const FILTER_OPTIONS: FilterOption[] = [
  {
    option: "occasion",
    filterValues: [
      { label: "Birthday", value: "birthday" },
      { label: "Graduation", value: "graduation" },
      { label: "Anniversary", value: "anniversary" },
      { label: "Wedding", value: "wedding" },
      { label: "New Baby", value: "newbaby" },
      { label: "Thank You", value: "thankyou" },
      { label: "Get Well", value: "getwell" },
      { label: "Sympathy", value: "sympathy" },
      { label: "Funeral", value: "funeral" },
      { label: "Other", value: "other" },
    ],
  },
  {
    option: "color",
    filterValues: [
      { label: "Red", value: "red" },
      { label: "White", value: "white" },
      { label: "Yellow", value: "yellow" },
      { label: "Pink", value: "pink" },
      { label: "Green", value: "green" },
      { label: "Orange", value: "orange" },
      { label: "Purple", value: "purple" },
      { label: "Mixed", value: "mixed" },
    ],
  },
  {
    option: "productType",
    filterValues: [
      { label: "Box", value: "box" },
      { label: "Bouquet", value: "bouquet" },
      { label: "Vase", value: "vase" },
      { label: "Basket", value: "basket" },
      { label: "Funeral", value: "funeral" },
      { label: "Hamper", value: "hamper" },
      { label: "Plant", value: "plant" },
      { label: "Succulent", value: "succulent" },
      { label: "Dried Flower", value: "driedflower" },
      { label: "Other", value: "other" },
    ],
  },
];
export const FILTER_OPTIONS_MULTI: FilterOption[] = [
  {
    option: "flowerType",
    filterValues: [
      { label: "Roses", value: "1" },
      { label: "Chrysanthemums", value: "2" },
      { label: "Carnations", value: "3" },
      { label: "Natives", value: "4" },
      { label: "Gerberas", value: "5" },
      { label: "Orchids", value: "6" },
      { label: "Lilies", value: "7" },
      { label: "Tropicals", value: "8" },
      { label: "Sunflowers", value: "9" },
      { label: "Irises", value: "10" },
      { label: "Tulips", value: "11" },
      { label: "Other", value: "12" },
    ],
  },
];

export const SORTS_OPTIONS: FilterOption[] = [
  {
    option: "sort",
    filterValues: [
      { label: "Price Low to High", value: "priceAsc" },
      { label: "Price High to Low", value: "priceDesc" },
    ],
  },
];

export const FILTER_OPTIONS_ALL: FilterOption[] = [
  ...FILTER_OPTIONS,
  ...FILTER_OPTIONS_MULTI,
  ...SORTS_OPTIONS,
];
