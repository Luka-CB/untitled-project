import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateIFace {
  isDark: boolean;
}

const isDarkFromStorage = localStorage.getItem("isDark")
  ? JSON.parse(localStorage.getItem("isDark") || "")
  : false;

const initialState: initialStateIFace = {
  isDark: isDarkFromStorage,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, { payload }: PayloadAction<boolean>) => {
      state.isDark = payload;
      localStorage.setItem("isDark", JSON.stringify(payload));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
