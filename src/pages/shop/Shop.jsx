import '..//../styles/Shop.css';
import IconBreadcrumbs from '../../components/IconBreadcrumbs';
import { Categories } from '../../components/Categories/Categories';
import { books } from '../../utility/books';
import { Box, IconButton, Rating } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { FilterSidebar } from './components/FilterSidebar';
import { FilterModal } from './components/FilterModal';
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import { useState } from 'react';

export const Shop = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <section className='about-us-section'>
      <div className="page-width page-width--narrow section-template--23597515800859__main-padding">
        <div className="full">
          <div className="breadcrumb-wp">
            <h1 style={{color: '#ffffff'}} className="main-page-title page-title h0">
              Shop
            </h1>
            <IconBreadcrumbs pageName="Shop" />
          </div>
        </div>
      </div>

      <Categories />
      
      <section className='product-section'>
        <div className='filter-section'>
          <FilterSidebar />
        </div>
        <div className='product-container'>
          <div>
            <div style={{padding:'1rem', marginTop:'1rem'}}>
              <Box className='filter-btn-box'>
                <button type='button' className='btn-theme-two' style={{alignItems:'center', gap:'5px'}} onClick={toggleModal}><p>Filters</p> <FilterListAltIcon color='inherit' fontSize='inherit' /></button>
              </Box>
              <h1 className='hd-c' style={{fontWeight:'normal', marginBottom:"1rem", marginTop:'2rem'}}>Current bestselling books  </h1>
              <div className="book-container-scroll" style={{marginBottom:'1rem', marginTop:'2rem'}}>
                <Box className="book-container" style={{flexWrap:'wrap'}}>
                  {books?.map((book, i) => (
                    <div className='book-inner' key={i}>
                      <div style={{position:'relative'}}>
                        <div style={{position:'absolute', top:'0', left:'0', zIndex:'1', display:'flex', justifyContent:'space-between', width:'100%',}}>
                          <div style={{width:'fit-content', height:'fit-content', padding:'8px'}}>
                            <div style={{background:'red', color:'white', width:'40px', height:'40px', display:'flex', justifyContent:'center', alignItems:'center', padding:'8px', borderRadius:'50%'}}>
                              <div style={{fontSize:'13px'}}>-15%</div>
                            </div>
                          </div>
                          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column', gap:'8px', color:'white', marginTop:'8px', marginRight:'8px'}}>
                            <IconButton sx={{color:'white', background: "#bebebe36"}}>
                              <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton sx={{color:'white', background: "#bebebe36"}}>
                              <VisibilityOutlinedIcon />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                      <div className='thumbnail'>
                        <img src={book.thumbnail} alt="" />
                      </div>
                      <div className='book-inner-content'>
                        <div className='rating' >
                          <div className='rating-inner'>
                              <Rating name="size-small" readOnly defaultValue={book.rating} precision={0.1} size="small" />
                              <span style={{color: '#474747'}}>({book.rating})</span>
                          </div>
                        </div>
                        <p className='title'>{book.title.length <= 40? book.title : book.title.slice(0,40) + '...'}</p>
                        <div className='author'><a href='#'>{book.author}</a></div>
                        <p className='price'><CurrencyRupeeIcon fontSize='inherit' sx={{mt:"4px"}} /> {book.price}  </p>
                        <div className='btn-container'>
                          <button style={{width:'100%', padding:'0.5rem 1rem'}} className='btn-theme-two'><AddIcon />Add to cart</button>
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

      <FilterModal toggleModal={toggleModal} modal={modal} />
    </section>
  )
}
