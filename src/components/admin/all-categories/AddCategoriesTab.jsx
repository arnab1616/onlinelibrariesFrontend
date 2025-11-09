import { Autocomplete, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import CategoryStepper from './components/CategoryStepper'
import SubCategoryInputs from './components/SubCategoryInputs';
import SubSubCategoryInputs from './components/SubSubCategoryInputs';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStep } from '../../../redux/slices/admin/adminCategorySlice';

export const AddCategoriesTab = () => {
  const {activeStep} = useSelector((state) => state.adminCategory);
  const dispatch = useDispatch();

  const [options, setOptions] = useState([
    { title: "The Shawshank Redemption", id: 1 },
    { title: "The Godfather", id: 2 },
    { title: "The Godfather: Part II", id: 3 },
    { title: "The Dark Knight", id: 4 },
    { title: "12 Angry Men", id: 5 },
    { title: "Schindler's List", id: 6 },
    { title: "Pulp Fiction", id: 7 },
  ]);

  return (
    <>
      <CategoryStepper />
      <form action="" className='add-product-form'>
        <h3 className='form-header'>Product categories details</h3>
        <div className='product-info-section'>
          {activeStep == 0 && (<>
          <div className='form-group' style={{ width: '50%' }}>
            <label htmlFor="">Category Name</label>
            <input type="text" placeholder='Enter your product category name' />
          </div>
          </>)}
          {activeStep == 1 && (<>
          <div className='form-group'>
            <label htmlFor="">Sub Category Name</label>
            <SubCategoryInputs />
          </div>
          </>)}
          {activeStep == 2 && (<>
          <div className='form-group'>
            <label htmlFor="">Select Sub Category Name</label>
            <Select type="text" placeholder='Email' style={{width:'50%'}}>
              <MenuItem>Book</MenuItem>
              {options.map((item) => <MenuItem>{item.title}</MenuItem>)}
            </Select>
          </div>
          <div className='form-group'>
            <label htmlFor="">Sub Sub Category Name</label>
            <SubSubCategoryInputs />
          </div>
          </>)}
        </div>
        <div className='form-group'>
          <button type='button' onClick={() => dispatch(setActiveStep(activeStep+1))} className='btn-theme-three'>Save & Next</button>
        </div>
      </form>
    </>
  )
}
