import React from "react";
import {
  DesktopCartDrawer,
  IconButtonStyled,
} from "../common/SearchContent.styled";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import JCard from "../../../molecules/jcard/JCard";
import EmptyCart from "./EmptyCart";

type CartProps = {
  closeHandler: () => void;
};

const Cart: React.FC<CartProps> = (props) => {
  const cartheaderAction: React.ReactNode = (
    <IconButtonStyled onClick={props.closeHandler}>
      <CloseOutlinedIcon />
    </IconButtonStyled>
  );

  return (
    <DesktopCartDrawer open anchor="right">
      <JCard title="Your Cart" headerActions={cartheaderAction}>
        <EmptyCart />
      </JCard>
    </DesktopCartDrawer>
  );
};

export default Cart;
