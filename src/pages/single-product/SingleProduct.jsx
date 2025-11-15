import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import '..//../styles/Product.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Divider, IconButton, Rating, Box, Typography, CircularProgress, } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { books } from '../../utility/books';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cart/cartSlice';

export const SingleProduct = () => {
  const { cartItems = [] } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productTitle, id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [singleLoading, setSingleLoading] = useState(false);
  const [bookId, setBookId] = useState(null);
  let isPresent = cartItems.includes(String(id));

  const handleAddtoCart = (id) => {
    console.log("cart increasing");
    setBookId(id);
    setLoading(true);
    setTimeout(() => {
      dispatch(addToCart(id));
      setLoading(false);
      setBookId(null);
      navigate('/cart');
    }, 1000);
  }

  const handleAddtoCartSingle = () => {
    console.log("cart increasing", isPresent, id);
    if (!isPresent) {
      setBookId(id);
      setSingleLoading(true);
      setTimeout(() => {
        dispatch(addToCart(id));
        setSingleLoading(false);
        setBookId(null);
        navigate('/cart');
      }, 1000);
    } 
    else navigate('/cart');
  }

  return (
    <div>
      {/* <h1>Product: {productTitle}</h1>
      <p>ID: {id}</p> */}
      <section className='single-product-section'>
        <section className='product-section-inner' style={{ paddingTop: '1rem' }}>
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
                      <div style={{ overflow: 'auto' }}>
                        <div className='product__media-all-container'>
                          <TabList className='product__media-all-img'>
                            <Tab><div className='single-tab' style={{ backgroundImage: 'url(/images/book1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div></Tab>
                            <Tab><div className='single-tab' style={{ backgroundImage: 'url(/images/book2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div></Tab>
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
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Rating defaultValue={4.5} precision={0.1} size='small' readOnly />
                            <span className='hd-c'>(4.3 / 5)</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                            <span>SKU: </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#027a36' }}>
                              <BarChartIcon />
                              <span>In Stock</span>
                            </span>
                          </div>
                        </div>
                        <Divider />
                        <Tabs>
                          <div className='product-price-info' style={{ margin: '1rem 0 2rem 0' }}>
                            <TabPanel>
                              <div className='price-container'>
                                <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 39.00  </span>
                                <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 49.00  </span>
                                <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 10.00  </span>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className='price-container'>
                                <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 23.00  </span>
                                <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 29.00  </span>
                                <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 6.00  </span>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className='price-container'>
                                <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 29.00  </span>
                                <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 38.00  </span>
                                <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 9.00  </span>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className='price-container'>
                                <span className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 199.00  </span>
                                <span className='price-discount'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 249.00  </span>
                                <span className='price-save'> Save <CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> 50.00  </span>
                              </div>
                            </TabPanel>

                            <p className='prodcut-description hd-c'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam et praesentium velit beatae veritatis reiciendis non voluptatem quo, perferendis magni voluptatum dolores. Reiciendis quasi obcaecati facere ducimus assumenda, quas sed voluptatibus vel quis harum repellat earum tempora. Quod autem earum enim possimus laudantium non voluptatum, est illum exercitationem. Cupiditate, quam.</p>
                          </div>
                          <Divider />
                          <div style={{ margin: '1rem 0 2rem 0' }}>
                            <div className='format-info'>
                              <h3 className='hd-c' style={{ marginBottom: '1rem', fontWeight: '500' }}>Format</h3>
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
                        <div style={{ margin: '1rem 0 2rem 0' }}>
                          <div className='order-section'>
                            <div className='product-quantity'>
                              <IconButton onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}> <RemoveIcon /> </IconButton>
                              <span>{quantity}</span>
                              <IconButton onClick={() => setQuantity(quantity + 1)}><AddIcon /></IconButton>
                            </div>
                            <div style={{ width: '100%' }}>
                              <button onClick={() => handleAddtoCartSingle()} disabled={singleLoading} className='btn-theme-two' style={{ width: '100%' }}>
                                {!singleLoading && !isPresent && <AddIcon sx={{ mr: '1rem', fontSize: '20px' }} />}
                                {singleLoading && <CircularProgress size={20} color='inhert' sx={{ mr: 2 }} />}
                                {cartItems.includes(String(id)) ? "Go to cart" : "Add to cart"}
                              </button>
                            </div>
                            <div style={{ width: '100%' }}> <button className='btn-theme-two' style={{ width: '100%' }}>Buy now <AddShoppingCartIcon sx={{ ml: '1rem', fontSize: '20px' }} /></button></div>
                          </div>
                          <div style={{ textAlign: 'center', marginTop: '1rem' }}><span className='hd-c' style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', width: 'fit-content', cursor: 'pointer' }}><FavoriteBorderIcon fontSize='inherit' /> Add to wishlist</span></div>
                        </div>
                        <Divider />
                        <div style={{ margin: '1rem 0 2rem 0' }}>
                          <div className='product-other-info'>
                            <span><CalendarTodayIcon color='inherit' fontSize='inherit' /> 2 years warranty </span>
                            <span><LocalShippingOutlinedIcon color='inherit' fontSize='inherit' /> Delivery time: 1-2 business days </span>
                            <span><ReplayOutlinedIcon color='inherit' fontSize='inherit' /> Free 90 days return </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='product-additional-info'>
              <div className='product-additional-info-inner'>
                <Tabs>
                  <div style={{ margin: '1rem 0 2rem 0' }}>
                    <div className='product-info-tab'>
                      <TabList>
                        <Tab><div className='info-tab'>Description</div></Tab>
                        <Tab><div className='info-tab'>Product info</div></Tab>
                        <Tab><div className='info-tab'>Reviews</div></Tab>
                      </TabList>
                    </div>
                  </div>
                  <Divider />
                  <div className='product-additional-info-content' style={{ margin: '1rem 0 2rem 0' }}>
                    <TabPanel>
                      <div className=''>
                        <p className='prodcut-description hd-c'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam et praesentium velit beatae veritatis reiciendis non voluptatem quo, perferendis magni voluptatum dolores. Reiciendis quasi obcaecati facere ducimus assumenda, quas sed voluptatibus vel quis harum repellat earum tempora. Quod autem earum enim possimus laudantium non voluptatum, est illum exercitationem. Cupiditate, quam.</p>
                        <p className='prodcut-description hd-c'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam et praesentium velit beatae veritatis reiciendis non voluptatem quo, perferendis magni voluptatum dolores. Reiciendis quasi obcaecati facere ducimus assumenda, quas sed voluptatibus vel quis harum repellat earum tempora. Quod autem earum enim possimus laudantium non voluptatum, est illum exercitationem. Cupiditate, quam.</p>
                        <p className='prodcut-description hd-c'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam et praesentium velit beatae veritatis reiciendis non voluptatem quo, perferendis magni voluptatum dolores. Reiciendis quasi obcaecati facere ducimus assumenda, quas sed voluptatibus vel quis harum repellat earum tempora. Quod autem earum enim possimus laudantium non voluptatum, est illum exercitationem. Cupiditate, quam.</p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className=''>
                        <p className='prodcut-description hd-c'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam et praesentium velit beatae veritatis reiciendis non voluptatem quo, perferendis magni voluptatum dolores. Reiciendis quasi obcaecati facere ducimus assumenda, quas sed voluptatibus vel quis harum repellat earum tempora. Quod autem earum enim possimus laudantium non voluptatum, est illum exercitationem. Cupiditate, quam.</p>
                        <p className='prodcut-description hd-c'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam et praesentium velit beatae veritatis reiciendis non voluptatem quo, perferendis magni voluptatum dolores. Reiciendis quasi obcaecati facere ducimus assumenda, quas sed voluptatibus vel quis harum repellat earum tempora. Quod autem earum enim possimus laudantium non voluptatum, est illum exercitationem. Cupiditate, quam.</p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className=''>
                        <p className='prodcut-description hd-c'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam et praesentium velit beatae veritatis reiciendis non voluptatem quo, perferendis magni voluptatum dolores. Reiciendis quasi obcaecati facere ducimus assumenda, quas sed voluptatibus vel quis harum repellat earum tempora. Quod autem earum enim possimus laudantium non voluptatum, est illum exercitationem. Cupiditate, quam.</p>

                      </div>
                    </TabPanel>
                  </div>
                  <Divider />
                </Tabs>
              </div>
            </div>
            <div className='related-products'>
              <div style={{ padding: '1rem' }}>
                <h1 className='hd-c' style={{ fontWeight: 'normal', marginBottom: "1rem", marginTop: '1rem' }}>Related Products </h1>

                <div className="book-container-scroll" style={{ marginBottom: '1rem', marginTop: '2rem' }}>
                  <Box className="book-container">
                    {books?.map((book, i) => (
                      <div className='book-inner' key={i}>
                        <div style={{ position: 'relative' }}>
                          <div style={{ position: 'absolute', top: '0', left: '0', zIndex: '1', display: 'flex', justifyContent: 'space-between', width: '100%', }}>
                            <div style={{ width: 'fit-content', height: 'fit-content', padding: '8px' }}>
                              <div style={{ background: 'red', color: 'white', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px', borderRadius: '50%' }}>
                                <div style={{ fontSize: '13px' }}>-15%</div>
                              </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', gap: '8px', color: 'white', marginTop: '8px', marginRight: '8px' }}>
                              <IconButton sx={{ color: 'white', background: "#bebebe36" }}>
                                <FavoriteBorderIcon />
                              </IconButton>
                              <IconButton sx={{ color: 'white', background: "#bebebe36" }}>
                                <VisibilityOutlinedIcon />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                        <div className='thumbnail' onClick={() => navigate(`/shop/${book.title.replace(/\s+/g, "-").toLowerCase()}/${book?.id}`)}>
                          <img src={book.thumbnail} alt="" />
                        </div>
                        <div className='book-inner-content'>
                          <div className='rating' >
                            <div className='rating-inner'>
                              <Rating name="size-small" readOnly defaultValue={book.rating} precision={0.1} size="small" />
                              <span style={{ color: '#474747' }}>({book.rating})</span>
                            </div>
                          </div>
                          <p className='title' onClick={() => navigate(`/shop/${book.title.replace(/\s+/g, "-").toLowerCase()}/${book?.id}`)}>{book.title.length <= 40 ? book.title : book.title.slice(0, 40) + '...'}</p>
                          <div className='author'><a href='#'>{book.author}</a></div>
                          <p className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{ mt: "4px" }} /> {book.price}  </p>
                          <div className='btn-container'>
                            <button disabled={loading} onClick={() => handleAddtoCart(book.id)} style={{ width: '100%', padding: '0.5rem 1rem' }} className='btn-theme-two'>
                              {!loading && <AddIcon />}
                              {loading && bookId === book.id && <CircularProgress size={20} color='inhert' sx={{ mr: 2 }} />}
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
