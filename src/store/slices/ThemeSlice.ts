import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  themeMode: string;
};

const initialState: InitialState = {
  themeMode: "light",
};

const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<{ mode: string }>) => {
      state.themeMode = action.payload.mode;
    },
  },
});

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
