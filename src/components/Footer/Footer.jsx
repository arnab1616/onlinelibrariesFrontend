import React from 'react';
import '..//../styles/Footer.css';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="footer__inner">
          <div className="">
            <div className="row">
              <div id="block-footer_text_4KekTm" className="col-lg-4 col-md-6 col-12 ">
                <div className="footer__item text-left footer-item__1 is-first">
                  <div className="logo-footer footer__item-title">
                    <Box sx={{display:'flex', alignItems:'center'}}>
                      {/* <IconButton
                        size="large"
                        edge="start"
                        color="#027a36"
                        aria-label="open drawer"
                      >
                        <MenuBookRoundedIcon sx={{color:'#027a36', fontSize:'2rem'}} />
                      </IconButton>
                      <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block', color:'#027a36' } }}
                      >
                        StudyCraft
                      </Typography> */}
                      <div className='logo-header'>
                        <img src="/images/logo-2.png" alt="logo" width="100%" />
                      </div>
                    </Box>
                    {/* <img style={{width: '145px'}} loading="lazy" sizes="145px" className="footer__image" alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&amp;width=144" data-srcset="//ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&amp;width=100 100w, //ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&amp;width=200 200w, //ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&amp;width=300 300w, //ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&amp;width=400 400w, //ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&amp;width=500 500w" width="144" height="36" /> */}
                  </div>   

                  <div className="footer__item-description mb-20">Bokifa draws book lovers of all ages into a community, 
                    <br />
                    engage with booklovers and meet their favourite 
                    <br />
                    literary personalities.

                    <span className="d-block mt-3 pt-1 mb-2 pb-1 fw-semibold" >+(91) 89106 92264</span>

                    <span className="d-block">
                    istudycraft@gmail.com
                    </span>
                  </div>
                        
                        
                  <div style={{color: "#000000"}} className="footer__item-content-list">

                    <div className="footer__item-content-text"></div>

                  </div>
                </div>
              </div>
              <div id="block-footer_item_tiytCG" className="col-lg-2 col-md-6 col-12 ">
                <div className="footer__item mb-xl-0 mb-4 text-left footer-item__2 ">
                  <div className="footer__item-title heading h6">Category</div>        
                  
                  <div className="footer__item-menu ">
                    <ul className="linklist list--unstyled" role="list">
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Action Books</a>
                      </li>
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Comedy</a>
                      </li>
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Drama</a>
                      </li>
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Horror</a>
                      </li>
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Kids Books</a>
                      </li>
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Top 50 Books</a>
                      </li>                            
                    </ul>
                  </div>

                  <div className="footer__item-menu">
                  </div>
                  
                </div>
              </div>
              <div id="block-footer_item_PbFEd9" className="col-lg-2 col-md-6 col-12 ">
                <div className="footer__item mb-xl-0 mb-4 text-left footer-item__3 ">
                  <div className="footer__item-title heading h6">Useful links</div>      
                  
                  <div className="footer__item-menu ">
                    <ul className="linklist list--unstyled" role="list">
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Secure Shopping</a>
                      </li>    
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Privacy Policy</a>
                      </li>
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Terms of Use</a>
                      </li>  
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Shipping Policy</a>
                      </li>
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Returns Policy</a>
                      </li>
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Payment Option </a>
                      </li>
                      
                    </ul>
                  </div>

                  <div className="footer__item-menu">
                  </div>
                  
                </div>
              </div>
              <div id="block-footer_item_QUjcY7" className="col-lg-2 col-md-6 col-12 ">
                <div className="footer__item mb-xl-0 mb-4 text-left footer-item__4 ">
                  <div className="footer__item-title heading h6">Explore</div>
                        
                  <div className="footer__item-menu ">
                    <ul className="linklist list--unstyled" role="list">
                      <li className="linklist__item">
                          <a href="/" className="link--faded">About us</a>
                      </li>   
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Store Locator</a>
                      </li>
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Kids Club</a>
                      </li> 
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Blogs</a>
                      </li>  
                      
                    </ul>
                  </div>

                  <div className="footer__item-menu">
                  </div>
                  
                </div>
              </div>
              <div id="block-footer_item_ECAcJz" className="col-lg-2 col-md-6 col-12 ">
                <div className="footer__item mb-xl-0 mb-4 text-left footer-item__5 ">
                  <div className="footer__item-title heading h6">Get in touch</div>  
                  
                  <div className="footer__item-menu ">
                    <ul className="linklist list--unstyled" role="list">
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Careers</a>
                      </li>    
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Become a Franchisee</a>
                      </li>  
                      <li className="linklist__item">
                          <a href="/" className="link--faded">Contact Us</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__item-menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div style={{padding:"1.5rem"}}>
          <p>Copyright © 2025 StudyCraft. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
