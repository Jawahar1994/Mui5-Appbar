import { AppBar, Box, styled } from "@mui/material";

export const AppBarStyled = styled(AppBar)({
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  boxShadow: "none",
});

export const DesktopHeaderContentBox = styled(Box)({
  flex: "1 1 33%",
  order: 0,
  display: "flex",
});
