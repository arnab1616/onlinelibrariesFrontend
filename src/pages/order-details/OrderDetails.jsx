import React from 'react'
import { books } from '../../utility/books';
import '..//../styles/Product.css';
import { Box, Divider, Rating, Stack } from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import OrderTrack from '../../components/order-details/OrderTrack';
import HoverRating from '../../components/order-details/HoverRating';
import OverallExperience from '../../components/order-details/OverallExperience';
import IconBreadcrumbs from '../../components/IconBreadcrumbs';


export const OrderDetails = () => {
  return (
    <section className='order-details-section' style={{padding:'1rem'}}>
      <IconBreadcrumbs pageName={"Order details"} color='black' />
      <div className='order-details-container'>
        <div className='order-details-inner'>
          <div className='order-details-info'>
            <div className='left-top'>
              <div style={{display:'flex', alignItems:'start', justifyContent:'space-between', gap:'2rem', marginBottom:'1rem', flexWrap:'wrap-reverse'}}>
                <div className='order-title'>
                  <span style={{fontSize:'1.2rem', fontWeight:'600'}}>{books[0].title?.length > 45 ? books[0].title.slice(0, 45) + '...' : books[0].title}</span>
                  <span style={{fontSize:'0.8rem', fontWeight:'500', color:'#888'}}>Author: {books[0].author}</span>
                  <span style={{fontSize:'0.8rem', fontWeight:'500', color:'#888'}}>Seller: {books[0].author}</span>
                  <span style={{fontSize:'1.1rem', fontWeight:'600', color:'#027a36'}}>₹299</span>
                </div>
                <div className='order-thumbnail'>
                  <div className='thumbnail-inner' style={{backgroundImage:`url(${books[0].thumbnail})`}}></div>
                </div>
              </div>
              <Divider />
              <Box sx={{my:'1rem'}}>
                <OrderTrack />
              </Box>
              <Divider />
              <div style={{display:'flex', alignItems:'center', gap:'1rem', padding:'1rem'}}>
                <button className='btn-theme-one' style={{width:'100%',gap:'0.5rem'}}> <UpdateOutlinedIcon color='inherit' fontSize='inherit' /> Return</button>
                <button className='btn-theme-three' style={{width:'100%',gap:'0.5rem'}}><ForumOutlinedIcon color='inherit' fontSize='inherit' /> Ask query</button>
              </div>
            </div>
            <div className='left-bottom'>
              <div style={{fontSize:'1.2rem', fontWeight:'600', marginBottom:'1rem'}}>Rate our product</div>
              <div>
                <p style={{fontSize:'1rem', fontWeight:'500',margin:0, color:'#4b4b4bff', textAlign:'center'}}>Rate our product accoring to your experience</p>
                <div style={{padding:'1rem', background: '#8080801c', borderRadius: '10px', marginTop:'10px', marginBottom:'2rem'}}>
                  <HoverRating />
                </div>
                <p style={{fontSize:'1rem', fontWeight:'500',margin:0, color:'#4b4b4bff', textAlign:'center'}}>Rate our product accoring to your experience</p>
                <div style={{padding:'1rem', background: '#8080801c', borderRadius: '10px', marginTop:'10px'}}>
                  <OverallExperience />
                </div>
              </div>
            </div>
          </div>
          <div className='order-other-info'>
            <div className='right-top'>
              <div style={{fontSize:'1.2rem', fontWeight:'600', marginBottom:'1rem'}}>Delivery details</div>
              <div style={{background: '#80808021',padding: '10px',borderRadius: '14px'}}>
                <div style={{display:'flex', alignItems:'start', gap:'0.5rem', color:'rgb(96, 96, 96)'}}>
                    <HomeOutlinedIcon />
                    <span style={{fontSize:'0.8rem', fontWeight:'500'}}><strong>Home</strong> 42,Chaulya Para NH6,Dhuliara bus stand, Chaulya Para...</span>
                </div>
                <Divider sx={{my: 1}} />
                <div style={{display:'flex', alignItems:'center', gap:'0.5rem', color:'rgb(96, 96, 96)'}}>
                    <PersonOutlinedIcon />
                    <span style={{fontSize:'0.8rem', fontWeight:'500'}}><strong>Arnab Chaulya</strong> 9382522438</span>
                </div>
              </div>
            </div>
            <div className='right-bottom'>
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
                    <div><span className='title'>Payment: </span> <span className='price'> Cash on delivery</span></div>
                    <div style={{marginTop:'1rem'}}>
                      <button className='btn-theme-three' style={{width:'100%', alignItems:'center', gap:'0.5rem'}}> <ReceiptLongIcon fontSize='inherit' color='inherit' /> <span>Download Invoice</span> </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
