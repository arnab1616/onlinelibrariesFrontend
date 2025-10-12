import { Box, Typography } from '@mui/material';
import React from 'react'
import { PanelHeadline } from '../../../components/admin/PanelHeadline';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AllCategoriesTab } from '../../../components/admin/all-categories/AllCategoriesTab';
import { AddCategoriesTab } from '../../../components/admin/all-categories/AddCategoriesTab';

export const AllCategories = () => {
  return (
    <Box>
        <div>
            <PanelHeadline />
            <Tabs>
              <div className='admin-info-tab'>
                <TabList>
                  <Tab><div className='info-tab'>All categories</div></Tab>
                  <Tab><div className='info-tab'>Add categories</div></Tab>
                </TabList>
              </div>
              <TabPanel>
                <AllCategoriesTab />
              </TabPanel>
              <TabPanel>
                <AddCategoriesTab />
              </TabPanel>
            </Tabs>
        </div>
    </Box>
  )
}
