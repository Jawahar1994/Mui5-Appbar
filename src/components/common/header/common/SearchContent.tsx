import { Box } from "@mui/material";
import React from "react";
import {
  ButtonStyled,
  InputBaseStyled,
  TypographyButtonStyled,
} from "./SearchContent.styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSearch } from "../../../../hooks/useSearch";
import SearchCategoryMenu from "./SearchCategoryMenu";

const SearchContent: React.FC = () => {
  const {
    selectedCategory,
    handleSelectedCategory,
    categories,
    searchText,
    handleSearchText,
    anchorEl,
    handleDropdownClick,
    handleDropdownClose,
  } = useSearch();

  const open = Boolean(anchorEl);

  return (
    <Box display={"flex"} flex={"1"} data-testid="search-content-container">
      <Box
        display={"flex"}
        flex={"0 30%"}
        data-testid="search-category-dropdown"
        sx={{ overflow: "hidden" }}
      >
        <ButtonStyled
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
          fullWidth
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleDropdownClick}
        >
          <TypographyButtonStyled variant={"body2"}>
            {selectedCategory}
          </TypographyButtonStyled>
        </ButtonStyled>
        {open && (
          <SearchCategoryMenu
            anchorEl={anchorEl}
            handleClose={handleDropdownClose}
            categories={categories}
            categorySelectionHandler={handleSelectedCategory}
            selected={selectedCategory}
          />
        )}
      </Box>
      <Box display={"flex"} flex={"0 70%"}>
        <InputBaseStyled
          placeholder="Search...."
          inputProps={{ "aria-label": "Search...." }}
          name="search"
          onChange={handleSearchText}
          value={searchText}
          fullWidth={true}
        />
      </Box>
    </Box>
  );
};

export default SearchContent;
