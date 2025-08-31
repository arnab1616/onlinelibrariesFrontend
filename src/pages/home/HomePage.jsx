import React from 'react'
import Header from '../../components/Header/Header'
import Hero1 from '../../components/Hero/Hero1'
import { Categories } from '../../components/Categories/Categories'
import { books } from '../../utility/books'
import { Box, IconButton } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
                <div className='thumbnail'>
                  <img src={book.thumbnail} alt="" />
                </div>
                <div className='book-inner-content'>
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
    </>
  )
}

export default HomePage
