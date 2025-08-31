import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const Categories = () => {
  return (
    <section className='top-categories' style={{padding:'1rem', backgroundColor: '#f9f5f0'}}>
        <div style={{width:'100%'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginBottom:'2rem'}}>
                <h1 style={{fontWeight:'normal'}}>Top Categories</h1>
                <div>
                    <button className='btn-theme-one'><p>browse all</p> <KeyboardDoubleArrowRightIcon sx={{ml:1}} /> </button>
                </div>
            </div>
            <div style={{marginBottom:'1rem'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt ea unde nulla itaque ut ab molestias harum praesentium reiciendis sequi quidem, fuga rem, velit sapiente! Ut distinctio deleniti amet?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt ea unde nulla itaque ut ab molestias harum praesentium reiciendis sequi quidem, fuga rem, velit sapiente! Ut distinctio deleniti amet?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt ea unde nulla itaque ut ab molestias harum praesentium reiciendis sequi quidem, fuga rem, velit sapiente! Ut distinctio deleniti amet?</p>
            </div>
        </div>
    </section>
  )
}
