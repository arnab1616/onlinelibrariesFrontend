import React from 'react'
import Header from '../../components/Header/Header'
import Hero1 from '../../components/Hero/Hero1'
import { Categories } from '../../components/Categories/Categories'
import { books } from '../../utility/books'
import { Box, IconButton, Rating } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Hero2 } from '../../components/Hero/Hero2'

const HomePage = () => {
  return (
    <>
      <Hero1 />
      <div style={{padding:'1rem'}}>
        <h1 style={{fontWeight:'normal', marginBottom:"1rem", marginTop:'1rem'}}>This week's highlights </h1>

        <div className="book-container-scroll" style={{marginBottom:'1rem', marginTop:'2rem'}}>
          <Box className="book-container">
            {books?.map((book, i) => (
              <div className='book-inner'>
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

      <Categories />

      <div style={{padding:'1rem', marginTop:'1rem'}}>
        <h1 style={{fontWeight:'normal', marginBottom:"1rem", marginTop:'2rem'}}>Current bestselling books  </h1>
        <div className="book-container-scroll" style={{marginBottom:'1rem', marginTop:'2rem'}}>
          <Box className="book-container">
            {books?.map((book, i) => (
              <div className='book-inner'>
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

      <Hero2 />
    </>
  )
}

export default HomePage
