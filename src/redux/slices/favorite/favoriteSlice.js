import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteCount: 0,
    favoriteItems: [],

    loading: false,
}
const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favoriteCount += 1;
        },
        removeToFavorite: (state, action) => {
            state.favoriteCount -= 1;
        }
    }
})

export const {addToFavorite, removeToFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;