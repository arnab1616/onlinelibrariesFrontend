import { configureStore } from "@reduxjs/toolkit";
import headerSlice from '../redux/headerSlice';
import adminHeaderSlice from '../redux/admin/adminHeaderSlice';
import adminCategorySlice from '../redux/admin/adminCategorySlice';


export const store = configureStore({
  reducer: {
    header: headerSlice,
    adminHeader: adminHeaderSlice,
    adminCategory: adminCategorySlice,
  },
});