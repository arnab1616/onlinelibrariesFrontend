import { configureStore } from "@reduxjs/toolkit";
import headerSlice from '../redux/headerSlice';

export const store = configureStore({
  reducer: {
    header: headerSlice,
  },
});