import React, { useRef } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '..//..//styles/Categories.css';
import { motion } from "framer-motion";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export const Categories = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 200;
        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className='top-categories' style={{ padding: '1rem', backgroundColor: '#f9f5f0' }}>
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 className='hd-c' style={{ fontWeight: 'normal' }}>Top Categories</h1>
                    <div>
                        <button className='btn-theme-one'><p>browse all</p> <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} /> </button>
                    </div>
                </div>
                <div className='swiper-wrapper-container'>
                    <motion.button type='button' onClick={() => scroll("left")} className="btn-theme-one scroll-button" style={{padding:'1rem'}}><ArrowLeftIcon /></motion.button>
                    <motion.div className='swiper-wrapper' ref={scrollRef} whileTap={{ cursor: "pointer" }}>
                        <motion.div transition={{ type: "spring", stiffness: 300 }} id="block-collection_QqKMqf" className="swiper-slide" role="group" aria-label="1 / 8" data-swiper-slide-index="0">
                            <a href="/collections/fantasy" className="ap-multicolumn__image-wrapper">
                                <img loading="lazy" sizes="(max-width: 740px) 25vw, (max-width: 999px) 20vw, 155px" className="ap-multicolumn__image" alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&amp;width=80" data-srcset="" width="80" height="80" />
                            </a>
                            <div className="ap-multicolumn__text-container" style={{ textAlign: 'center' }}>
                                <a href="/collections/fantasy" className="ap-multicolumn__link heading h6 child-collection-title  ">Fantasy</a>
                            </div>
                        </motion.div>
                        <motion.div transition={{ type: "spring", stiffness: 300 }} id="block-collection_QqKMqf" className="swiper-slide" role="group" aria-label="1 / 8" data-swiper-slide-index="0">
                            <a href="/collections/fantasy" className="ap-multicolumn__image-wrapper">
                                <img loading="lazy" sizes="(max-width: 740px) 25vw, (max-width: 999px) 20vw, 155px" className="ap-multicolumn__image" alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_7.png?v=1729585074&width=80" data-srcset="" width="80" height="80" />
                            </a>
                            <div className="ap-multicolumn__text-container" style={{ textAlign: 'center' }}>
                                <a href="/collections/fantasy" className="ap-multicolumn__link heading h6 child-collection-title  ">Horror</a>
                            </div>
                        </motion.div>
                        <motion.div transition={{ type: "spring", stiffness: 300 }} id="block-collection_QqKMqf" className="swiper-slide" role="group" aria-label="1 / 8" data-swiper-slide-index="0">
                            <a href="/collections/fantasy" className="ap-multicolumn__image-wrapper">
                                <img loading="lazy" sizes="(max-width: 740px) 25vw, (max-width: 999px) 20vw, 155px" className="ap-multicolumn__image" alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_5.png?v=1729585073&width=80" data-srcset="" width="80" height="80" />
                            </a>
                            <div className="ap-multicolumn__text-container" style={{ textAlign: 'center' }}>
                                <a href="/collections/fantasy" className="ap-multicolumn__link heading h6 child-collection-title  ">Fiction</a>
                            </div>
                        </motion.div>
                        <motion.div transition={{ type: "spring", stiffness: 300 }} id="block-collection_QqKMqf" className="swiper-slide" role="group" aria-label="1 / 8" data-swiper-slide-index="0">
                            <a href="/collections/fantasy" className="ap-multicolumn__image-wrapper">
                                <img loading="lazy" sizes="(max-width: 740px) 25vw, (max-width: 999px) 20vw, 155px" className="ap-multicolumn__image" alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_4.png?v=1729585074&width=80" data-srcset="" width="80" height="80" />
                            </a>
                            <div className="ap-multicolumn__text-container" style={{ textAlign: 'center' }}>
                                <a href="/collections/fantasy" className="ap-multicolumn__link heading h6 child-collection-title  ">Romance</a>
                            </div>
                        </motion.div>
                        <motion.div transition={{ type: "spring", stiffness: 300 }} id="block-collection_QqKMqf" className="swiper-slide" role="group" aria-label="1 / 8" data-swiper-slide-index="0">
                            <a href="/collections/fantasy" className="ap-multicolumn__image-wrapper">
                                <img loading="lazy" sizes="(max-width: 740px) 25vw, (max-width: 999px) 20vw, 155px" className="ap-multicolumn__image" alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_3.png?v=1729585074&width=80" data-srcset="" width="80" height="80" />
                            </a>
                            <div className="ap-multicolumn__text-container" style={{ textAlign: 'center' }}>
                                <a href="/collections/fantasy" className="ap-multicolumn__link heading h6 child-collection-title  ">Kids</a>
                            </div>
                        </motion.div>
                        <motion.div transition={{ type: "spring", stiffness: 300 }} id="block-collection_QqKMqf" className="swiper-slide" role="group" aria-label="1 / 8" data-swiper-slide-index="0">
                            <a href="/collections/fantasy" className="ap-multicolumn__image-wrapper">
                                <img loading="lazy" sizes="(max-width: 740px) 25vw, (max-width: 999px) 20vw, 155px" className="ap-multicolumn__image" alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_2.png?v=1729585074&width=80" data-srcset="" width="80" height="80" />
                            </a>
                            <div className="ap-multicolumn__text-container" style={{ textAlign: 'center' }}>
                                <a href="/collections/fantasy" className="ap-multicolumn__link heading h6 child-collection-title  ">History</a>
                            </div>
                        </motion.div>
                        <motion.div transition={{ type: "spring", stiffness: 300 }} id="block-collection_QqKMqf" className="swiper-slide" role="group" aria-label="1 / 8" data-swiper-slide-index="0">
                            <a href="/collections/fantasy" className="ap-multicolumn__image-wrapper">
                                <img loading="lazy" sizes="(max-width: 740px) 25vw, (max-width: 999px) 20vw, 155px" className="ap-multicolumn__image" alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_1.png?v=1729585073&width=80" data-srcset="" width="80" height="80" />
                            </a>
                            <div className="ap-multicolumn__text-container" style={{ textAlign: 'center' }}>
                                <a href="/collections/fantasy" className="ap-multicolumn__link heading h6 child-collection-title  ">Biography</a>
                            </div>
                        </motion.div>
                        <motion.div transition={{ type: "spring", stiffness: 300 }} id="block-collection_QqKMqf" className="swiper-slide" role="group" aria-label="1 / 8" data-swiper-slide-index="0">
                            <a href="/collections/fantasy" className="ap-multicolumn__image-wrapper">
                                <img loading="lazy" sizes="(max-width: 740px) 25vw, (max-width: 999px) 20vw, 155px" className="ap-multicolumn__image" alt="" src="//ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_6.png?v=1729585073&width=80" data-srcset="" width="80" height="80" />
                            </a>
                            <div className="ap-multicolumn__text-container" style={{ textAlign: 'center' }}>
                                <a href="/collections/fantasy" className="ap-multicolumn__link heading h6 child-collection-title  ">Family</a>
                            </div>
                        </motion.div>
                    </motion.div>
                    <button type='button' onClick={() => scroll("right")} className="btn-theme-one scroll-button" style={{padding:'1rem'}}><ArrowRightIcon /></button>
                </div>
            </div>
        </section>
    )
}
