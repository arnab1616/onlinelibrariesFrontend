import { Box, Select } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { books } from '../../utility/books';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';

export const MyOrder = () => {
    const navigate = useNavigate();
    return (
        <Box className='my-order-section'>
            <div className='' >
                <div className='filter-bar-section'>
                    <div className='search-bar-section' style={{ width: '100%' }}>
                        <div style={{ width: '100%' }}>
                            <input type="text" name="" placeholder='Search by product name...' id="" />
                        </div>
                        <div>
                            <button><SearchIcon color='inherit' fontSize='inherit' /> <span>Search</span></button>
                        </div>
                    </div>
                    <div className='filter-bar'>
                        <div className='form-group' style={{ width: '100%' }}>
                            <label htmlFor="">Filter by status</label>
                            <Select name="" id="" sx={{ width: '100%', '& .MuiSelect-select': { padding: '0.5rem 1rem' } }}></Select>
                        </div>
                        <div className='form-group' style={{ width: '100%' }}>
                            <label htmlFor="">Filter by Order Time</label>
                            <Select name="" id="" sx={{ width: '100%', '& .MuiSelect-select': { padding: '0.5rem 1rem' } }}></Select>
                        </div>
                    </div>
                </div>
                <div className='order-list-section'>
                    <h3 style={{ textTransform: "capitalize", fontWeight: '600', marginBottom: '1.5rem' }}>Your order history</h3>
                    <div className='order-list-container'>
                        {books.map((book, index) => (
                            <div className='order-item' key={index}>
                                <div className='order-item-inner' onClick={() => { navigate(`/order-details/${book.title.replace(/\s+/g, "-").toLowerCase()}/${book.id}`) }}>
                                    <div className='order-thumbnail'>
                                        <div className='thumbnail-inner' style={{ backgroundImage: `url(${book.thumbnail})` }}></div>
                                    </div>
                                    <div className='order-title'>
                                        <span>{book.title?.length > 45 ? book.title.slice(0, 45) + '...' : book.title}</span>
                                        <span style={{ fontSize: '0.8rem', fontWeight: '500', color: '#888' }}>Author: {book.author}</span>
                                    </div>
                                    <div className='order-price'>
                                        <CurrencyRupeeIcon color='inherit' fontSize='inherit' />
                                        <span>{book.price}</span>
                                    </div>
                                    <div className='order-status'>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}>
                                            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'green' }}></span>
                                            <span style={{ fontSize: '1rem', fontWeight: '600' }}>{book?.status || 'Delivered on Monday 22 sep 2025'}</span>
                                        </div>
                                        <span className='status-text' style={{ fontSize: '0.8rem', fontWeight: '500' }}>Your item has been delivered</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Box>
    )
}
