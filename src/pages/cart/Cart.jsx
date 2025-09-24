import React, { useState } from 'react'
import IconBreadcrumbs from '../../components/IconBreadcrumbs'
import { books } from '../../utility/books'
import { Box, Divider, IconButton, Rating } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';
import '../../styles/Cart.css';


export const Cart = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  return (
    <Box className='cart-section'>
      <section className="page-width page-width--narrow section-template--23597515800859__main-padding">
        <div className="full">
          <div className="breadcrumb-wp">
            <h1 style={{color: '#ffffff'}} className="main-page-title page-title h0">
              Cart
            </h1>
            <IconBreadcrumbs pageName="Cart" />
          </div>
        </div>
      </section>
      <div style={{padding:'1rem'}}>
        {/* <h1 className='hd-c' style={{fontWeight:'normal', marginBottom:"1rem", marginTop:'1rem'}}>Your Cart </h1>
        <IconBreadcrumbs pageName="Cart" color="black" /> */}

        <div className='cart-container'>
          <div className='cart-list-section'>
            <div className='cart-list-container'>
              {books.map((book, index) => (
                <div className='cart-item' key={index}>
                  <div className='cart-item-inner' >
                    <div style={{display:'flex', alignItems:'start', gap:'2rem', flexWrap:'wrap'}}>
                      <div className='cart-thumbnail' onClick={() => navigate(`/shop/${book.title.replace(/\s+/g, "-").toLowerCase()}/${book?.id}`)}>
                        <div className='thumbnail-inner' style={{backgroundImage:`url(${book.thumbnail})`}}></div>
                      </div>
                      <div className='cart-title'>
                        <span className='title-x' style={{fontWeight:'600'}} onClick={() => navigate(`/shop/${book.title.replace(/\s+/g, "-").toLowerCase()}/${book?.id}`)}>{book.title?.length > 45 ? book.title.slice(0, 45) + '...' : book.title}</span>
                        <span style={{fontSize:'0.8rem', fontWeight:'500', color:'#888'}}>Author: {book.author}</span>
                        <div className='price-container'>
                          <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 39.00  </span>
                          <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 49.00  </span>
                          <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 10.00  </span>
                        </div>
                        <div style={{display:'flex', alignItems:'center', gap:'1rem', marginBottom:'8px'}}>
                          <div className='product-quantity'>
                            <IconButton onClick={() => { if(quantity > 1) setQuantity(quantity - 1)}}> <RemoveIcon /> </IconButton>
                            <span>{quantity}</span>
                            <IconButton onClick={() => setQuantity(quantity + 1)}><AddIcon /></IconButton>
                          </div>
                          <div className='cart-status'>
                            <IconButton>
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span style={{display:'flex', alignItems:'center', gap:'5px', color:'#027a36'}}>
                      <BarChartIcon />
                      <span>In Stock</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='cart-total-section'>
            <div className='cart-total-container'>
              <div className='cart-total-title'>Price details</div>
              <Divider />
              <div className='cart-total-item'>
                <div className='cart-total-item-list'>
                  <div><span className='title'>Price (7 items)</span> <span className='price'>₹40,137</span></div>
                  <div><span className='title'>Discount</span> <span className='price min'>− ₹20,529</span></div>
                  <div><span className='title'>Buy more & save more</span> <span className='price min'>− ₹20</span></div>
                  <div><span className='title'>Coupons for you</span> <span className='price min'>− ₹353</span></div>
                  <div><span className='title'>Protect Promise Fee</span> <span className='price'>₹19</span></div>
                  <div><span className='title'>Handling Fee</span> <span className='price'>₹49</span></div>
                </div>
                <Divider />
                <div className='cart-subtotal'>
                  <span className='title'>Total Amount</span>
                  <span className='price'>₹19,303</span>
                </div>
              </div>
              <Divider />
              <div className='cart-button'>
                <button style={{width:'100%'}} className='btn-theme-five'>Place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
