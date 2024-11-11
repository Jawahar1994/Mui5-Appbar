import { CardActions } from "@mui/material";
import React from "react";
import { CardContentStyled, CardHeaderStyled, CardStyled } from "./JCard.style";

type JCardProps = {
  title: string;
  headerActions?: React.ReactNode;
  children: React.ReactNode;
};

const JCard: React.FC<JCardProps> = (props) => {
  const { title, children, headerActions } = props;

  return (
    <CardStyled>
      <CardHeaderStyled title={title} action={headerActions} />
      <CardContentStyled>{children}</CardContentStyled>
    </CardStyled>
  );
};

export default JCard;
