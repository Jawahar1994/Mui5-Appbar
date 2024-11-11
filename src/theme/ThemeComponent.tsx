import { ThemeProvider } from "@emotion/react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { createTheme } from "@mui/material";

type ThemeComponentProps = {
  children: React.ReactNode;
};

const ThemeComponent: React.FC<ThemeComponentProps> = ({ children }) => {
  const { themeMode } = useSelector((state: RootState) => state.themeSlice);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#080f50",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#002552",
      },
    },
  });

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
