import React, { useEffect } from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activePath, activePathReload } from '../redux/admin/adminHeaderSlice';

export const AdminSidebarActive = () => {
    const { currentPath } = useSelector((state) => state.adminHeader);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const NavlinkActivation = (id, path) => {
        const current = window.location.pathname;
        navigation(path);
        dispatch(activePath({id, path}));
        if (current === path) {
            dispatch(activePath({id, path}))
            navigation(path);
            return;
        }
    }
    useEffect(() => {
        const current = window.location.pathname;
        dispatch(activePathReload({path: current}));
    }, [])

    return (
        <>
            <List className='admin-sidebar-active'>
                <ListItem disablePadding sx={{ display: 'block' }} className={currentPath?.id == 1?'current':''} onClick={() => {NavlinkActivation(1,'dashboard')}}>
                    <ListItemButton sx={[{minHeight: 48, px: 2.5, }, open ? {justifyContent: 'initial'} : {justifyContent: 'center'}]}>
                        <ListItemIcon sx={[ {minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : { mr: 'auto' } ]}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} sx={[ open ? {opacity: 1} : {opacity: 0} ]} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ display: 'block' }} className={currentPath?.id == 2?'current':''} onClick={() => {NavlinkActivation(2,'add-product')}}>
                    <ListItemButton sx={[{minHeight: 48, px: 2.5, }, open ? {justifyContent: 'initial'} : {justifyContent: 'center'}]}>
                        <ListItemIcon sx={[ {minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : { mr: 'auto' } ]}>
                            <Inventory2Icon />
                        </ListItemIcon>
                        <ListItemText primary={'Add Products'} sx={[ open ? {opacity: 1} : {opacity: 0} ]} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ display: 'block' }} className={currentPath?.id == 3?'current':''} onClick={() => {NavlinkActivation(3,'all-catagories')}}>
                    <ListItemButton sx={[{minHeight: 48, px: 2.5, }, open ? {justifyContent: 'initial'} : {justifyContent: 'center'}]}>
                        <ListItemIcon sx={[ {minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : { mr: 'auto' } ]}>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Category'} sx={[ open ? {opacity: 1} : {opacity: 0} ]} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ display: 'block' }} className={currentPath?.id == 4?'current':''} onClick={() => {NavlinkActivation(4,'track-products')}}>
                    <ListItemButton sx={[{minHeight: 48, px: 2.5, }, open ? {justifyContent: 'initial'} : {justifyContent: 'center'}]}>
                        <ListItemIcon sx={[ {minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : { mr: 'auto' } ]}>
                            <LocalShippingIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Track Products'} sx={[ open ? {opacity: 1} : {opacity: 0} ]} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ display: 'block' }} className={currentPath?.id == 5?'current':''} onClick={() => {NavlinkActivation(5,'contact-support')}}>
                    <ListItemButton sx={[{minHeight: 48, px: 2.5, }, open ? {justifyContent: 'initial'} : {justifyContent: 'center'}]}>
                        <ListItemIcon sx={[ {minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : { mr: 'auto' } ]}>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Contact Support'} sx={[ open ? {opacity: 1} : {opacity: 0} ]} />
                    </ListItemButton>
                </ListItem>
                
            </List>
            <Divider />
            <List className='admin-sidebar-active'>
                <ListItem disablePadding sx={{ display: 'block' }} className={currentPath?.id == 6?'current':''} onClick={() => {NavlinkActivation(6,'my-account')}}>
                    <ListItemButton sx={[{minHeight: 48, px: 2.5, }, open ? {justifyContent: 'initial'} : {justifyContent: 'center'}]}>
                        <ListItemIcon sx={[ {minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : { mr: 'auto' } ]}>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={'My Account'} sx={[ open ? {opacity: 1} : {opacity: 0} ]} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ display: 'block' }} className={currentPath?.id == 7?'current':''} onClick={() => {NavlinkActivation(7,'settings')}}>
                    <ListItemButton sx={[{minHeight: 48, px: 2.5, }, open ? {justifyContent: 'initial'} : {justifyContent: 'center'}]}>
                        <ListItemIcon sx={[ {minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : { mr: 'auto' } ]}>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} sx={[ open ? {opacity: 1} : {opacity: 0} ]} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={[{minHeight: 48, px: 2.5, }, open ? {justifyContent: 'initial'} : {justifyContent: 'center'}]}>
                        <ListItemIcon sx={[ {minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : { mr: 'auto' } ]}>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} sx={[ open ? {opacity: 1} : {opacity: 0} ]} />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}
