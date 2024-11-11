import React from "react";

export type CategoryItem = {
  label: string;
  key: string;
};

export const useSearch = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchText, setSearchText] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSelectedCategory = (selectedCategory: CategoryItem) => {
    setSelectedCategory(selectedCategory.label);
    handleDropdownClose();
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const categories: CategoryItem[] = [
    {
      label: "All",
      key: "all",
    },
    {
      label: "Category1 Category1Category1",
      key: "category1",
    },
    {
      label: "Category2",
      key: "Category2",
    },
    {
      label: "Category3",
      key: "category3",
    },
    {
      label: "Category4",
      key: "category4",
    },
    {
      label: "Category5",
      key: "category5",
    },
    {
      label: "Category6",
      key: "category6",
    },
    {
      label: "Category7",
      key: "category7",
    },
  ];

  return {
    selectedCategory,
    handleSelectedCategory,
    categories,
    searchText,
    handleSearchText,
    anchorEl,
    handleDropdownClick,
    handleDropdownClose,
  };
};
