import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
        props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                    transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                backgroundColor:'#027a36'
            },
        },
    ],
}));

export const AdminHeader = ({open, handleDrawerOpen}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <AppBar position="fixed" open={open} sx={{backgroundColor:'#027a36'}}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                    {
                        marginRight: 5,
                    },
                    open && { display: 'none' },
                    ]}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexGrow: 1, width:'100%' }}>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                    <Box>
                        <button onClick={() => navigate('/admin-login')} className='btn-theme-one' style={{padding:'0.4rem 1rem', alignItems:'center'}}><LoginIcon fontSize='inherit' sx={{mr:1}} /> <span>Login</span></button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
