import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import counterSlice from "./counterSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    themeData: themeSlice,
    data: cartSlice,
  },
});
