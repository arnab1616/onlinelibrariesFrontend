import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartCount: 0,
    cartItems: [],

    loading: false,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartCount += 1;
            state.cartItems.push(action.payload);
        },
        removeToCart: (state, action) => {
            state.cartCount -= 1;
        }
    }
});

export const {addToCart, removeToCart} = cartSlice.actions;
export default cartSlice.reducer;