import { Box } from '@mui/material';
import { motion } from "framer-motion";
import '../../styles/Hero1.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Banner } from './Banner';

const sentence1 = "the world of <br/>  young adult <br/> books";
const words1 = sentence1.split("<br/> ");
const sentence2 = "From React";
const words2 = sentence2.split(" ");

function Hero1() {
  return (
    <>
    <Box className="hero1">
      <div className="hero1-content">
        <div className='hero1-content-outer'>
          <div className='hero1-content-inner'>
            <div className='hero1-content-box'>
              <div className='hero1-banner-text'>
                <div className='first-content'><span>A brand new</span></div>
                <div className='scnd-content'>
                  <span className="word-animation">
                    {/* <span>the</span> <span>world</span> <span>of</span> <br />  <span>young</span> <span>adult</span> <br /> <span>books</span> */}
                    {/* <span>Text</span> <span>to</span> <span>Notes</span> <br /> <span>everything</span> <span>you</span> <br /> <span>need</span> <span>to</span> <span>successed</span> */}
                    <span>Text</span> <span>to</span> <span>Notes</span> <br /> <span>everything</span> <span>you</span> <br /> <span>need</span>
                  </span>
                </div>
                <div className='trd-content'>
                  <span>Save up to 15% on new releases.</span>
                </div>
              </div>
              <div className='frth-content'>
                <button className='btn-theme-one'><p>discover now</p> <KeyboardDoubleArrowRightIcon sx={{ml:1}} /> </button>
              </div>
            </div>
          </div>
          <span className="sl-lable">
            <span className='inner-box'>
              <span className='discount'>
                15%<br />off
              </span>
              <img className='discount-img' alt="discount img" src="https://cdn.shopify.com/s/files/1/0906/6014/3387/files/ap_bo_bgsale_2.png?v=1729500187" loading="lazy" />
            </span>
          </span>
        </div>
      </div>
    </Box>
    <Banner />
    </>
  );
}

export default Hero1;
