import { InputLabel, ListItem, MenuItem, Select } from '@mui/material'
import React from 'react'

export const FormInfoBox = () => {
  return (
    <form action="" className='add-product-form'>
        <h3 className='form-header'>Product details</h3>
        <div className='product-info-section'>
            <div className='form-group'>
              <label htmlFor="">Product Title</label>
              <input type="text" placeholder='Enter your product title' />
            </div>
            <div className='form-group'>
              <label htmlFor="">Product Description</label>
              <textarea type="text" placeholder='Write product descriptions here...'  rows={5}></textarea>
            </div>
            <div className='form-group-outer'>
                <div className='form-group'>
                    <label htmlFor="">Product total stock</label>
                    <input type="number" placeholder='Total available product stock' />
                </div>
                <div className='form-group'>
                    <label htmlFor="">MRP</label>
                    <input type="number" placeholder='Enter your product MRP' />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Discounted Price</label>
                    <input type="number" placeholder='Enter your product price' />
                </div>
            </div>
            <div className='form-group-outer'>
                <div className='form-group'>
                    <label htmlFor="">Product Category</label>
                    <Select 
                        // value={age}
                        // onChange={handleChange}
                        placeholder={"sdfs"}
                    >
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Sub Category</label>
                    <Select type="text" placeholder='Email' >
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Sub Sub Category</label>
                    <Select type="text" placeholder='Email' >
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Product format available</label>
                    <Select type="text" placeholder='Email'>
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
            </div>
        </div>

        <h3 className='form-header'>Product Delivery informations</h3>
        <div className='product-info-section'>
            <div style={{display: 'flex', gap: '1rem',}}>
                <div className='form-group'>
                    <label htmlFor="">Delivery time</label>
                    <Select type="text" placeholder='Email' >
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Return policy</label>
                    <Select type="text" placeholder='Email' >
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Warranty</label>
                    <Select type="text" placeholder='Email' >
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
            </div>
        </div>

        <h3 className='form-header'>Product additional informations</h3>
        <div className='product-info-section'>
            <div className='form-group'>
              <label htmlFor="">Product Title</label>
              <input type="text" placeholder='Enter your product title' />
            </div>
            <div className='form-group'>
              <label htmlFor="">Product Title</label>
              <textarea type="text" placeholder='Write product descriptions here...' ></textarea>
            </div>
            <div style={{display: 'flex', gap: '1rem',}}>
                <div className='form-group'>
                    <label htmlFor="">Product Category</label>
                    <Select 
                        // value={age}
                        // onChange={handleChange}
                        placeholder={"sdfs"}
                    >
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Product Sub Category</label>
                    <Select type="text" placeholder='Email' >
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Sub Sub Category</label>
                    <Select type="text" placeholder='Email' >
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Product format available</label>
                    <Select type="text" placeholder='Email'>
                        <MenuItem>Book</MenuItem>
                        <MenuItem>Stationary</MenuItem>
                    </Select>
                </div>
            </div>
        </div>
    </form>
  )
}
