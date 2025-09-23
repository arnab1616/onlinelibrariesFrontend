import React from 'react'
import '../../styles/Profile.css';
import { TopCard } from '../../components/my-profile/TopCard'
import { Divider } from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MyProfileInfo } from '../../components/my-profile/MyProfileInfo';
import { MyOrder } from '../../components/my-profile/MyOrder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { MyAddresses } from '../../components/my-profile/MyAddresses';
import { MyPayments } from '../../components/my-profile/MyPayments';

export const MyProfile = () => {
  return (
    <section className='profile-section' style={{padding:'1rem'}}>
      <TopCard />
      <Divider />
      <div className='profile-tab-section'>
        <Tabs>
          <div className='profile-info-tab-outer'>
            <div className='profile-info-tab'>
              <TabList>
                <Tab><span className='profile-tab'><ManageAccountsIcon color='inherit' fontSize='inherit' /> My account info</span></Tab>
                <Tab><span className='profile-tab'><ShoppingBagIcon color='inherit' fontSize='inherit' /> My Orders</span></Tab>
                <Tab><span className='profile-tab'><LocationOnIcon color='inherit' fontSize='inherit' /> My addresses</span></Tab>
                <Tab><span className='profile-tab'><AccountBalanceWalletIcon color='inherit' fontSize='inherit' /> My payments</span></Tab>
              </TabList>
            </div>
          </div>
          <div className='product-additional-info-content' style={{margin:'1rem 0 2rem 0', width: '100%'}}>
            <TabPanel>
              <MyProfileInfo />
            </TabPanel>
            <TabPanel>
              <MyOrder />
            </TabPanel>
            <TabPanel>
              <MyAddresses />
            </TabPanel>
            <TabPanel>
              <MyPayments />
            </TabPanel> 
          </div>
        </Tabs>
      </div>
    </section>
  )
}
