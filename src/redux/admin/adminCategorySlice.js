import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    activeStep: 0,
}

const adminCategorySlice = createSlice({
  name: "adminHeader",
  initialState: initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
      // state.currentPath = action.payload;
    },
  },
});

export const { setActiveStep, } = adminCategorySlice.actions;
export default adminCategorySlice.reducer;