import { createSlice, current } from "@reduxjs/toolkit";
import { path } from "framer-motion/client";

const initialState = {
    pathNames: [
        {id:1, pathName:"Dashboard", path:'/admin/dashboard', active:true},
        {id:2, pathName:"Add Product", path:'/admin/add-product', active:true},
        {id:3, pathName:"About", path:'/about', active:false},
        {id:4, pathName:"Contact", path:'/contact', active:false},
        {id:5, pathName:"Favorites", path:'/favorites', active:false},
        {id:6, pathName:"Cart", path:'/cart', active:false},
    ],
    currentPath: {id:1, pathName:"Dashboard", path:'/admin/dashboard', active:true},
}

const adminHeaderSlice = createSlice({
  name: "adminHeader",
  initialState: initialState,
  reducers: {
    activePath: (state, action) => {
        state.currentPath = action.payload;
    },
    activePathReload: (state, action) => {
      if(action.payload.path.includes('shop')) {
        state.currentPath = {id:2, pathName:"About", path:'/shop', active:true};
      } else {
        const current = state.pathNames.find((item) => item.path === action.payload.path)
        state.currentPath = current;
      }
    },
  },
});

export const { activePath, activePathReload } = adminHeaderSlice.actions;
export default adminHeaderSlice.reducer;