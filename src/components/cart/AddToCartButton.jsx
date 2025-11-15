import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cart/cartSlice';

export const AddToCartButton = () => {
    const { loading = false, } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddtoCart = () => {
        dispatch(addToCart());
    }

    return (
        <button
            onClick={handleAddtoCart}
            style={{ width: '100%', padding: '0.5rem 1rem' }}
            className='btn-theme-two'
        >
            <AddIcon />Add to cart
        </button>
    )
}
