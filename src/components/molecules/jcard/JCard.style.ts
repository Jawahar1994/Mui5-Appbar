import {
  Box,
  Card,
  CardContent,
  CardHeader,
  styled,
  Typography,
} from "@mui/material";

export const EmptyBoxWrapperStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
  gap: "1rem",
});

export const CardStyled = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const CardHeaderStyled = styled(CardHeader)(({ theme }) => ({
  backgroundColor: "#1a237e",
  "& .MuiCardHeader-title": {
    color: "#fff",
  },
}));

export const CardContentStyled = styled(CardContent)({
  overflow: "auto",
  height: "100%",
});
