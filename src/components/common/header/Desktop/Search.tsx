import React from "react";
import { IconButtonStyled } from "../common/SearchContent.styled";
import { Box, Fade } from "@mui/material";
import SearchContent from "../common/SearchContent";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Search: React.FC = () => {
  const [toggleSearch, setToggleSearch] = React.useState(false);

  const toggleSearchHandler = () => {
    setToggleSearch(!toggleSearch);
  };

  const getContent = (
    <Box data-testid="search-content" flex={1}>
      <SearchContent />
    </Box>
  );

  return (
    <Box display={"flex"} alignItems={"center"} flex={"0 100%"}>
      <IconButtonStyled
        data-testid="toggle-search-icon-button"
        onClick={toggleSearchHandler}
      >
        {!toggleSearch ? <SearchOutlinedIcon /> : <CloseOutlinedIcon />}
      </IconButtonStyled>
      <Fade in={toggleSearch} unmountOnExit>
        {getContent}
      </Fade>
    </Box>
  );
};

export default Search;
