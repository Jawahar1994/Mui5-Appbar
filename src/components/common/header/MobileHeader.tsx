import { Box, Collapse, Container, Toolbar } from "@mui/material";
import React from "react";
import Logo from "../../../assets/logo/logo1.png";
import AccountMenu from "./common/AccountMenu";
import { IconButtonStyled } from "./common/SearchContent.styled";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchContent from "./common/SearchContent";
import { AppBarStyled } from "./Header.styled";

const MobileHeader: React.FC = () => {
  const [toggleSearch, setToggleSearch] = React.useState(false);

  const toggleSearchHandler = () => {
    setToggleSearch((prev) => !prev);
  };

  return (
    <AppBarStyled position="static" color="primary" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            display={"flex"}
            alignItems={"center"}
            flex={1}
            data-testid="mobile-header-appbar"
          >
            <Box flex="0 45%" display={"flex"} alignItems={"center"}>
              <img src={Logo} alt="Logo" style={{ width: "100%" }} />
            </Box>
            <Box flex="1" justifyContent={"end"} display={"flex"}>
              <IconButtonStyled
                data-testid="toggle-search-icon-button"
                onClick={toggleSearchHandler}
              >
                <SearchOutlinedIcon />
              </IconButtonStyled>
              <AccountMenu />
            </Box>
          </Box>
        </Toolbar>
        <Collapse
          in={toggleSearch}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 300, exit: 200 }}
        >
          <Box
            data-testid="mobile-search-content"
            flex={1}
            sx={{ paddingBottom: 2 }}
          >
            <SearchContent />
          </Box>
        </Collapse>
      </Container>
    </AppBarStyled>
  );
};

export default MobileHeader;
