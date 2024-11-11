import React from "react";
import { AppBarStyled } from "./Header.styled";
import { Container, Toolbar } from "@mui/material";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import { useWindowResize } from "../../../hooks/useWindowResize";

const Header: React.FC = () => {
  const { isMobile } = useWindowResize();

  return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
