import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Typography } from "@mui/material";
import { EmptyBoxWrapperStyled } from "../../../molecules/jcard/JCard.style";

const EmptyCart = () => {
  return (
    <EmptyBoxWrapperStyled>
      <Typography component={"div"}>
        <ShoppingCartIcon sx={{ transform: "scale(2)" }} />
      </Typography>
      <Typography variant="body1">Your Cart is empty!</Typography>
      <Button variant="contained">Start Shopping</Button>
    </EmptyBoxWrapperStyled>
  );
};

export default EmptyCart;
