import { Box } from '@mui/material'
import React from 'react'
import { FormInfoBox } from '../../../components/admin/add-product/FormInfoBox'

export const AddProduct = () => {
  return (
    <Box>
      <div>
        <div style={{marginBottom:'2rem'}}>
          <h2 className='hd-c'>Add Product</h2>
          <p className='p-c'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <FormInfoBox />
        </div>
      </div>
    </Box>
  )
}