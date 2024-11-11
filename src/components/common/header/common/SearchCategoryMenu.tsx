import React from "react";
import { SearchMenuItemStyled, SearchMenuStyled } from "./SearchContent.styled";
import { CategoryItem } from "../../../../hooks/useSearch";

type SearchCategoryMenuProps = {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  categories: CategoryItem[];
  categorySelectionHandler: (value: CategoryItem) => void;
  selected: string;
};

const SearchCategoryMenu: React.FC<SearchCategoryMenuProps> = (props) => {
  const {
    anchorEl,
    handleClose,
    categories,
    categorySelectionHandler,
    selected,
  } = props;

  return (
    <SearchMenuStyled
      id="basic-menu"
      anchorEl={anchorEl}
      open={true}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {categories.map((category) => {
        return (
          <SearchMenuItemStyled
            selected={selected === category.key}
            onClick={() => categorySelectionHandler(category)}
          >
            {category.label}
          </SearchMenuItemStyled>
        );
      })}
    </SearchMenuStyled>
  );
};

export default SearchCategoryMenu;
