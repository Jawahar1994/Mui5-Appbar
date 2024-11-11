import { Box } from "@mui/material";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { BadgeStyled, IconButtonStyled } from "./SearchContent.styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../cart/Cart";

const AccountMenu: React.FC = () => {
  const [showCart, setShowCart] = React.useState(false);

  const toogleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"end"}
      sx={{
        "& > *": {
          ml: 0.1,
          mr: 0.1,
        },
      }}
    >
      <IconButtonStyled>
        <PersonOutlineIcon />
      </IconButtonStyled>
      <IconButtonStyled onClick={toogleCart}>
        <BadgeStyled badgeContent={3}>
          <ShoppingCartOutlinedIcon />
        </BadgeStyled>
      </IconButtonStyled>

      {showCart && <Cart closeHandler={toogleCart} />}
    </Box>
  );
};

export default AccountMenu;
