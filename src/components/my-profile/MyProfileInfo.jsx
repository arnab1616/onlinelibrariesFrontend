import { FormControlLabel, IconButton, Radio, RadioGroup } from '@mui/material'
import React from 'react'

export const MyProfileInfo = () => {
  return (
    <div className='my-profile-info-section'>
        <form action="" className='add-product-form'>
            <h3 className='form-header'>Personal details</h3>
            <div className='product-info-section'>
                <div className='form-group-outer'>
                    <div className='form-group'>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Enter you first name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Middle Name</label>
                        <input type="text" placeholder='Enter you middle name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Enter you last name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Your Gender</label>
                        <RadioGroup sx={{flexDirection:'row', '& .css-13lvt8g-MuiButtonBase-root-MuiRadio-root.Mui-checked': {color:'#027a36'}}}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </div>
                </div>
                <div className='form-group-outer'>
                    <div className='form-group'>
                        <label htmlFor="">Mobile number</label>
                        <input type="text" placeholder='enter your mobile number' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Additional Mobile number</label>
                        <input type="number" placeholder='Enter your product MRP' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='example@gmail.com' readOnly />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor="">About</label>
                    <textarea type="text" placeholder='Write product descriptions here...'  rows={5}></textarea>
                </div>
            </div>
        </form>
        <div style={{paddingTop:'1rem'}}>
            <div style={{marginBottom:'1rem'}}><strong>FAQs</strong></div>
            <p style={{marginBottom:'1rem'}}>What happens when I update my email address (or mobile number)?</p>

            <p style={{marginBottom:'1rem'}}>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
            When will my StudyCraft account be updated with the new email address (or mobile number)?</p>

            <p style={{marginBottom:'1rem'}}>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
            What happens to my existing StudyCraft account when I update my email address (or mobile number)?</p>

            <p style={{marginBottom:'1rem'}}>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
            Does my Seller account get affected when I update my email address?</p>

            <p style={{marginBottom:'1rem'}}>StudyCraft has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>

        </div>
    </div>
  )
}
