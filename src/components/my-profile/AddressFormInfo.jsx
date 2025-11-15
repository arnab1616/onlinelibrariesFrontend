import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Select } from '@mui/material';

export const AddressFormInfo = ({ formVisibility, setFormVisibility }) => {
    return (
        <div className={formVisibility ? 'address-form-section active' : 'address-form-section '}>
            <form style={{ width: '100%' }}>
                <h4 className='form-header' style={{ color: '#027a36' }}>Add a New Address</h4>
                <div className='form-group-outer'>
                    <div className='form-group'>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Enter you first name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Enter you last name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Mobile number</label>
                        <input type="text" placeholder='enter your mobile number' />
                    </div>
                </div>
                <div className='form-group-outer'>
                    <div className='form-group'>
                        <label htmlFor="">Additional Mobile number</label>
                        <input type="number" placeholder='Enter your product MRP' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='example@gmail.com' readOnly />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Landmark</label>
                        <input type="text" placeholder='Enter famous landmark' />
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor="">Complete Address</label>
                    <input type="text" placeholder='Write full address here...' />
                </div>

                <div className='form-group-outer'>
                    <div className='form-group'>
                        <label htmlFor="">City/District/Town</label>
                        <input type="text" placeholder='enter your City/District/Town' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Pincode</label>
                        <input type="number" placeholder='Enter your pincode' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">State</label>
                        <Select></Select>
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor="">Address Type</label>
                    <RadioGroup sx={{ flexDirection: 'row', '& .css-13lvt8g-MuiButtonBase-root-MuiRadio-root.Mui-checked': { color: '#027a36' } }}>
                        <FormControlLabel value="home" control={<Radio />} label="Home" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </div>

                <div className='form-group'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                        <button type='submit' className='btn-theme-two' style={{ width: '100%' }}>Save</button>
                        <button type='button' className='btn-theme-four' style={{ width: '100%' }} onClick={() => setFormVisibility(!formVisibility)}>Cancel</button>
                    </div>
                </div>
            </form>
            <div className='map-box' style={{ minWidth: '300px' }}>
                <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14753.53526493678!2d87.75728620526178!3d22.41457518576072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a512fd3cb5d7%3A0x5df2701daae19360!2sBharat%20Petroleum!5e0!3m2!1sen!2sin!4v1757088469980!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
