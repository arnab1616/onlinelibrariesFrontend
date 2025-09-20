import { createSlice, current } from "@reduxjs/toolkit";
import { path } from "framer-motion/client";

const initialState = {
    pathNames: [
        {id:1, pathName:"Dashboard", path:'/admin/dashboard', active:true},
        {id:2, pathName:"Add Product", path:'/admin/add-product', active:true},
        {id:3, pathName:"Catagories", path:'/admin/all-catagories', active:true},
        {id:4, pathName:"Track Product", path:'/admin/track-products', active:true},
        {id:5, pathName:"Contact support", path:'/admin/contact-support', active:true},
        {id:6, pathName:"My Account", path:'/admin/my-account', active:true},
        {id:7, pathName:"Settings", path:'/admin/settings', active:true},
    ],
    currentPath: {id:1, pathName:"Dashboard", path:'/admin/dashboard', active:true},
}

const adminHeaderSlice = createSlice({
  name: "adminHeader",
  initialState: initialState,
  reducers: {
    activePath: (state, action) => {
      const current = state.pathNames.find((item) => item.id === action.payload.id)
      state.currentPath = current;
      // state.currentPath = action.payload;
    },
    activePathReload: (state, action) => {
      // if(action.payload.path.includes('shop')) {
      //   state.currentPath = {id:2, pathName:"About", path:'/shop', active:true};
      // } else {
        const current = state.pathNames.find((item) => item.path === action.payload.path)
        state.currentPath = current;
      // }
    },
  },
});

export const { activePath, activePathReload } = adminHeaderSlice.actions;
export default adminHeaderSlice.reducer;