import { Box } from '@mui/material';
import React from 'react'

function Hero1() {
  return (
    <Box sx={{mt:'8rem'}}>
      <div>
        <div >
          <div>
            <div style={{position:'absolute', top:'0'}}>
              <div>
                <div>
                  <div><p>A brand new</p></div>
                  <div>
                    <span>
                      the world of <br />  young adult <br /> books
                    </span>
                  </div>
                  <div>
                    <span>Save up to 15% on new releases.</span>
                  </div>
                </div>
                <div>
                  <button>discover now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/bo_h1_slide.jpg" alt="hero_image_1"  style={{width:'100%'}}/>
        </div>
      </div>
    </Box>
  );
}

export default Hero1;
