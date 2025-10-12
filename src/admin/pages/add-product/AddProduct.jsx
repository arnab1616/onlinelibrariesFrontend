import { Box } from '@mui/material';
import React from 'react'
import { FormInfoBox } from '../../../components/admin/add-product/FormInfoBox';
import { PanelHeadline } from '../../../components/admin/PanelHeadline';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AllProductTab } from '../../../components/admin/add-product/AllProductTab';

export const AddProduct = () => {
  return (
    <Box>
      <div>
        <PanelHeadline />
        <Tabs>
          <div className='admin-info-tab'>
            <TabList>
              <Tab><div className='info-tab'>All products</div></Tab>
              <Tab><div className='info-tab'>Add product</div></Tab>
            </TabList>
          </div>
          <TabPanel>
            <AllProductTab />
          </TabPanel>
          <TabPanel>
            <FormInfoBox />
          </TabPanel>
        </Tabs>
      </div>
    </Box>
  )
}