import React from 'react'
import '..//../styles/Hero2.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const Hero2 = () => {
  return (
    <section className="image-banner">
        <div className="container">
            <banner-content reveal-on-scroll="" className="wrapper-banner-content ap-object-loaded" style={{opacity: 1}}>
                <div className="banner-content has-overlay" style={{backgroundImage:"url('//ap-bokifa.myshopify.com/cdn/shop/files/bo_banner.jpg?v=1729586314&amp;width=1530')"}}>
                    {/* <div className="banner-image">
                        <img className="banner-list-image" reveal="" loading="lazy" sizes="(max-width: 740px) 80vw, (max-width: 999px) 60vw, 425px"  alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/bo_banner.jpg?v=1729586314&amp;width=1530" data-srcset="//ap-bokifa.myshopify.com/cdn/shop/files/bo_banner.jpg?v=1729586314 1530w" height="450" width="100%" style={{opacity: 1}} />
                    </div>   */}
                    <div id="text-text_Ug9hay" className="container banner-text">
                        <div className="text-left">
                            <h3 style={{color: 'rgb(246, 250, 54)', opacity: 1}} className="sub-heading-2" reveal="">Best Collection.</h3>
                            <h2 style={{color: 'rgb(255, 255, 255)', opacity: 1}} className="image-banner-title_center" reveal="">Top favourite <br/>thriller stories</h2>
                            <p style={{color: "#ffffff", marginBottom:"1.5rem"}} className="image-banner-description mb-md-3 mb-2 pb-1">Find our take on the best books of all time.</p>
                            <button className='btn-theme-one'><p>discover now</p> <KeyboardDoubleArrowRightIcon sx={{ml:1}} /> </button>
                        </div>
                    </div>
                </div>
            </banner-content>
        </div>
    </section>
  )
}
