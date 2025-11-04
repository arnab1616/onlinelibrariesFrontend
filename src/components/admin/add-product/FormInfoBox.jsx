import { InputLabel, ListItem, MenuItem, Select } from '@mui/material';
import InputFileCoverImageUpload from './components/InputFileCoverImageUpload';
import InputFileContentImageUpload from './components/InputFileContentImageUpload';
import InputFileProductImageUpload from './components/InputFileProductImageUpload';
import AddIcon from '@mui/icons-material/Add';

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

        <h3 className='form-header'>Product(Books) additional informations</h3>
        <div className='product-info-section'>
            <div className='form-group'>
              <label htmlFor="">Book Gener</label>
              <input type="text" placeholder='Enter your product title' />
            </div>
            <div className='form-group'>
              <label htmlFor="">About book</label>
              <textarea type="text" placeholder='Write about your book here...' ></textarea>
            </div>
            <div style={{display: 'flex', gap: '1rem',}}>
                <div className='form-group'>
                    <label htmlFor="">Author</label>
                    <input type="text" placeholder='Enter Author name' />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Publisher</label>
                    <input type="text" placeholder='Enter Publisher name' />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Language</label>
                    <input type="text" placeholder='Enter your book medium' />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Book Edition</label>
                    <input type="text" placeholder='Enter your book edition' />
                </div>
            </div>
        </div>

        <h3 className='form-header'>Product images informations</h3>
        <div className='product-info-section'>
            <p style={{paddingBottom:'2rem', color: 'red'}}><strong>Note: </strong> Max file size is 1MB, Minimum dimension: 300x480 And Suitable files are .jpg & .png</p>
            <div style={{display: 'flex', gap: '1rem',}}>
                <div className='form-group'>
                    <label htmlFor="">Product Image</label>
                    <InputFileProductImageUpload />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Book Cover Image</label>
                    <InputFileCoverImageUpload />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Book content page Image</label>
                    <InputFileContentImageUpload />
                </div>
                <div className='form-group'>
                    <div style={{display:'flex', alignItems:'end', justifyContent:'center', height:'100%' }}>
                        <div className='add-more-image-box'>
                            <div style={{display:'flex', alignItems:'center', gap:'0.5rem', width:'fit-content'}}>
                                <AddIcon />
                                <span>Add more image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='product-info-section'>
            <div className='form-group'>
                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                    <input type="checkbox" placeholder='Enter your book edition' />
                    <span className='hd-c'>Please read all product term & conditions</span>
                </div>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn-theme-three'>Add product</button>
            </div>
        </div>
    </form>
  )
}
