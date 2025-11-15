import { Box, IconButton } from '@mui/material';
import React from 'react'
import { books } from '../../utility/books';
import BarChartIcon from '@mui/icons-material/BarChart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export const MyFavorites = () => {
    const navigate = useNavigate();
    return (
        <Box className='my-favorites-section'>
            <h3 className='my-profile-sub-title'>My Favorites ({books.length || 0})</h3>
            <div className='favorite-list-section'>
                <div className='favorite-list-container'>
                    {books.map((book, index) => (
                        <div className='favorite-item' key={index}>
                            <div className='favorite-item-inner' >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                                    <div className='favorite-thumbnail' onClick={() => navigate(`/shop/${book.title.replace(/\s+/g, "-").toLowerCase()}/${book?.id}`)}>
                                        <div className='thumbnail-inner' style={{ backgroundImage: `url(${book.thumbnail})` }}></div>
                                    </div>
                                    <div className='favorite-title' onClick={() => navigate(`/shop/${book.title.replace(/\s+/g, "-").toLowerCase()}/${book?.id}`)}>
                                        <span style={{ fontWeight: '600' }} >{book.title?.length > 45 ? book.title.slice(0, 45) + '...' : book.title}</span>
                                        <span style={{ fontSize: '0.8rem', fontWeight: '500', color: '#888' }}>Author: {book.author}</span>
                                        <div className='price-container'>
                                            <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 39.00  </span>
                                            <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 49.00  </span>
                                            <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 10.00  </span>
                                        </div>
                                    </div>
                                </div>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#027a36' }}>
                                    <BarChartIcon />
                                    <span>In Stock</span>
                                </span>
                                <div className='favorite-status'>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Box>
    )
}
