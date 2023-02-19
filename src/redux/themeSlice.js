import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers:{
    themeMode: (state) => {
      state.theme = !state.theme;
    },
  }
});

export const { themeMode } = themeSlice.actions;

export default themeSlice.reducer;
