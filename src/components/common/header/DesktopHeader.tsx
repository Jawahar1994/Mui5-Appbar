import React from "react";
import { Box, Container, Toolbar } from "@mui/material";
import { AppBarStyled, DesktopHeaderContentBox } from "./Header.styled";
import Logo from "../../../assets/logo/logo1.png";
import Search from "./Desktop/Search";
import AccountMenu from "./common/AccountMenu";

const DesktopHeader: React.FC = () => {
  return (
    <AppBarStyled position="static" color="primary" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            display={"flex"}
            alignItems={"center"}
            flex={1}
            data-testid="desktop-header-appbar"
          >
            <DesktopHeaderContentBox data-testid="desktop-search-bar">
              <Search />
            </DesktopHeaderContentBox>
            <DesktopHeaderContentBox justifyContent={"center"}>
              <img src={Logo} alt="Logo" />
            </DesktopHeaderContentBox>
            <DesktopHeaderContentBox justifyContent={"right"}>
              <AccountMenu />
            </DesktopHeaderContentBox>
          </Box>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};

export default DesktopHeader;
