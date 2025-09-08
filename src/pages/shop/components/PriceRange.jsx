import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveIcon from '@mui/icons-material/Minimize';

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceRange() {
  const [value, setValue] = React.useState([0, 599]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
        <Box sx={{ maxWidth: 300, width: '100%' }}>
            <Slider
                min={0}
                max={599}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                // color='#027a36'
                sx={{color:'#027a36'}}
            />
        </Box>
        <div>
            <div className='hd-c' style={{display:'flex', justifyContent:'center',fontSize:'1rem', marginTop:'8px'}}>
                <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',padding: '0 9px',backgroundColor: '#f5deb394'}}>
                    <CurrencyRupeeIcon fontSize='inherit' color='inherit' /> {value[0]}
                </div>
                <RemoveIcon fontSize='inherit' color='inherit' sx={{m: '0 5px'}}/>
                <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',padding: '0 9px',backgroundColor: '#f5deb394'}}>
                    <CurrencyRupeeIcon fontSize='inherit' color='inherit' /> {value[1]}
                </div>
            </div>
        </div>
    </Box>
  );
}
