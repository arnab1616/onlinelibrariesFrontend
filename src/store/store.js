import { configureStore } from "@reduxjs/toolkit";
import headerSlice from '../redux/headerSlice';
import adminHeaderSlice from '../redux/adminHeaderSlice';

export const store = configureStore({
  reducer: {
    header: headerSlice,
    adminHeader: adminHeaderSlice,
  },
});