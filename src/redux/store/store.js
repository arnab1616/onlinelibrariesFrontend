import { configureStore } from "@reduxjs/toolkit";
import headerSlice from '../slices/headerSlice';
import adminHeaderSlice from '../slices/admin/adminHeaderSlice';
import adminCategorySlice from '../slices/admin/adminCategorySlice';
import cartSlice from '../slices/cart/cartSlice';
import favoriteSlice from '../slices/favorite/favoriteSlice';


export const store = configureStore({
  reducer: {
    header: headerSlice,
    cart: cartSlice,
    favorite: favoriteSlice,

    // admin slices
    adminHeader: adminHeaderSlice,
    adminCategory: adminCategorySlice,
  },
});