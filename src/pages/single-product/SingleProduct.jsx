import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import '..//../styles/Product.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Divider, IconButton, Rating } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

export const SingleProduct = () => {
  const { productTitle, id } = useParams();
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      {/* <h1>Product: {productTitle}</h1>
      <p>ID: {id}</p> */}
      <section className='single-product-section'>
        <section className='product-section-inner' style={{paddingTop:'1rem'}}>
          <div className='container'>
            <div className='wp-main-product'>
              <div className='main-product product--thumbnails-bottom'>
                <div className='main-product-wrapper'>
                  <div className='product__media'>
                    <Tabs className='product__media-inner'>
                      <div className='product__media-img'>
                        <div className='img-container'>
                          <TabPanel className='img-tab-panel'>
                            <img className='product-img' src="/images/book1.jpg" alt="product img" />
                          </TabPanel>
                          <TabPanel className='img-tab-panel'>
                            <img className='product-img' src="/images/book2.jpg" alt="product img" />
                          </TabPanel>
                        </div>
                      </div>
                      <div style={{overflow:'auto'}}>
                        <div className='product__media-all-container'>
                          <TabList className='product__media-all-img'>
                            <Tab><div className='single-tab' style={{backgroundImage:'url(/images/book1.jpg)', backgroundSize:'cover', backgroundPosition:'center'}}></div></Tab>
                            <Tab><div className='single-tab' style={{backgroundImage:'url(/images/book2.jpg)', backgroundSize:'cover', backgroundPosition:'center'}}></div></Tab>
                          </TabList>
                        </div>
                      </div>
                    </Tabs>
                  </div>
                  <div className='product__info'>
                    <div>
                      <div>
                        <div className='product-header-info'>
                          <h2>{productTitle}</h2>
                          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                            <Rating defaultValue={4.5} precision={0.1} size='small' readOnly/>
                            <span className='hd-c'>(4.3 / 5)</span>
                          </div>
                          <div style={{display:'flex', alignItems:'center', gap:'1rem',marginTop:'1rem' }}>
                            <span>SKU: </span>
                            <span style={{display:'flex', alignItems:'center', gap:'5px', color:'#027a36'}}>
                              <BarChartIcon />
                              <span>In Stock</span>
                            </span>
                          </div>
                        </div>
                        <Divider />
                        <Tabs>
                          <div className='product-price-info' style={{margin:'1rem 0 2rem 0'}}>
                            <TabPanel>
                              <div className='price-container'>
                                <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 39.00  </span>
                                <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 49.00  </span>
                                <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 10.00  </span>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className='price-container'>
                                <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 23.00  </span>
                                <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 29.00  </span>
                                <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 6.00  </span>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className='price-container'>
                                <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 29.00  </span>
                                <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 38.00  </span>
                                <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 9.00  </span>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className='price-container'>
                                <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 199.00  </span>
                                <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 249.00  </span>
                                <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> 50.00  </span>
                              </div>
                            </TabPanel>
                            
                            <p className='prodcut-description hd-c'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam et praesentium velit beatae veritatis reiciendis non voluptatem quo, perferendis magni voluptatum dolores. Reiciendis quasi obcaecati facere ducimus assumenda, quas sed voluptatibus vel quis harum repellat earum tempora. Quod autem earum enim possimus laudantium non voluptatum, est illum exercitationem. Cupiditate, quam.</p>
                          </div>
                          <Divider />
                          <div style={{margin:'1rem 0 2rem 0'}}>
                            <div className='format-info'>
                              <h3 className='hd-c' style={{marginBottom:'1rem', fontWeight:'500'}}>Format</h3>
                              <TabList>
                                <Tab><div className='format-tab'>Hardcover</div></Tab>
                                <Tab><div className='format-tab'>Paperback</div></Tab>
                                <Tab><div className='format-tab'>Ebook</div></Tab>
                                <Tab><div className='format-tab'>Audio cd</div></Tab>
                              </TabList>
                            </div>
                          </div>
                        </Tabs>
                        <Divider />
                        <div style={{margin:'1rem 0 2rem 0'}}>
                          <div className='order-section'>
                            <div className='product-quantity'>
                              <IconButton onClick={() => { if(quantity > 1) setQuantity(quantity - 1)}}> <RemoveIcon /> </IconButton>
                              <span>{quantity}</span>
                              <IconButton onClick={() => setQuantity(quantity + 1)}><AddIcon /></IconButton>
                            </div>
                            <div style={{width:'100%'}}> <button className='btn-theme-two' style={{width:'100%'}}> <AddIcon sx={{mr:'1rem', fontSize:'20px'}}  /> Add to cart</button></div>
                            <div style={{width:'100%'}}> <button className='btn-theme-two' style={{width:'100%'}}>Buy now <AddShoppingCartIcon sx={{ml:'1rem', fontSize:'20px'}} /></button></div>
                          </div>
                          <div style={{textAlign:'center', marginTop:'1rem'}}><span className='hd-c' style={{display:'flex', alignItems:'center', gap:'10px', fontSize:'1rem', width:'fit-content', cursor:'pointer'}}><FavoriteBorderIcon fontSize='inherit' /> Add to wishlist</span></div>
                        </div>
                        <Divider />
                        <div style={{margin:'1rem 0 2rem 0'}}>
                          <div className='product-other-info'>
                            <span><CalendarTodayIcon color='inherit' fontSize='inherit'/> 2 years warranty </span>
                            <span><LocalShippingOutlinedIcon color='inherit' fontSize='inherit'/> Delivery time: 1-2 business days </span>
                            <span><ReplayOutlinedIcon color='inherit' fontSize='inherit' /> Free 90 days return </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
