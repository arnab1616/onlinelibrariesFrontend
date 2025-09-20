import { Box } from '@mui/material'
import React from 'react'
import { FormInfoBox } from '../../../components/admin/add-product/FormInfoBox'
import { PanelHeadline } from '../../../components/admin/PanelHeadline'

export const AddProduct = () => {
  return (
    <Box>
      <div>
        <PanelHeadline />
        <div>
          <FormInfoBox />
        </div>
      </div>
    </Box>
  )
}