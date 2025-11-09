import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    pathNames: [
        {id:1, pathName:"Home", path:'/', active:true},
        {id:2, pathName:"About", path:'/shop', active:true},
        {id:3, pathName:"About", path:'/about', active:false},
        {id:4, pathName:"Contact", path:'/contact', active:false},
        {id:5, pathName:"Favorites", path:'/favorites', active:false},
        {id:6, pathName:"Cart", path:'/cart', active:false},
    ],
    currentPath: {id:1, pathName:"Home", path:'/', active:true},
    tabIndex: 0,
}

const headerSlice = createSlice({
  name: "header",
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
    setTabIndex: (state, action) => {
      state.tabIndex = action.payload;
    }
  },
});

export const { activePath, activePathReload, setTabIndex } = headerSlice.actions;
export default headerSlice.reducer;