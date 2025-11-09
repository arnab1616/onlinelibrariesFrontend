import { configureStore } from "@reduxjs/toolkit";
import headerSlice from '../slices/headerSlice';
import adminHeaderSlice from '../slices/admin/adminHeaderSlice';
import adminCategorySlice from '../slices/admin/adminCategorySlice';


export const store = configureStore({
  reducer: {
    header: headerSlice,
    adminHeader: adminHeaderSlice,
    adminCategory: adminCategorySlice,
  },
});