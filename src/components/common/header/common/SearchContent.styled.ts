import {
  Badge,
  BadgeProps,
  Button,
  Drawer,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";

export const IconButtonStyled = styled(IconButton)({
  color: "#fff",
});

export const ButtonStyled = styled(Button)({
  color: "black",
  backgroundColor: "lightgray",
  borderColor: "lightgray",
  borderTopRightRadius: "inherit",
  borderBottomRightRadius: "inherit",
  justifyContent: "start",
  "&:hover": {
    backgroundColor: "lightgray",
    borderColor: "lightgray",
  },
  "& .MuiButton-endIcon": {
    justifyContent: "end",
    flex: 1,
  },
});

export const TypographyButtonStyled = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const InputBaseStyled = styled(InputBase)({
  flex: 1,
  color: "black",
  backgroundColor: "#fff",
  padding: "5px 15px",
});

export const BadgeStyled = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1a237e",
  },
}));

export const DesktopCartDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    minWidth: "540px",
    maxWidth: "100%",
    color: "inherit",
    borderRadius: "4px",
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiDrawer-paper": {
      minWidth: "90%",
    },
  },
}));

export const SearchMenuStyled = styled(Menu)({
  "& .MuiMenu-list": {
    minWidth: "200px",
    maxWidth: "200px",
  },
});

export const SearchMenuItemStyled = styled(MenuItem)({
  whiteSpace: "normal",
  wordWrap: "break-word",
});
