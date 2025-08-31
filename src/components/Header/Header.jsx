
import '../../styles/Header.css'
import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Divider from '@mui/material/Divider';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { activePath, activePathReload } from '../../redux/headerSlice';


export default function Header() {
  const {currentPath} = useSelector((state) => state.header);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const [anchorEl1, setAnchorEl1] = React.useState(null);
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
  const open = Boolean(anchorEl1);
  
  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl1(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const [open1, setOpen1] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen1(newOpen);
  };

  const [open2, setOpen2] = useState(false);

  const toggleDrawer2 = (newOpen) => () => {
    setOpen2(newOpen);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const list = () => (
    <Box
      sx={{ width: '250px' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className='mobile-nav'
    >
      <Box sx={{p:2, pb: 0}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
          <IconButton
            size="large"
            edge="start"
            color="#027a36"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            <MenuBookRoundedIcon sx={{color:'#027a36'}} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block', color:'#027a36' } }}
          >
            StudyCraft
          </Typography>
        </Box>
      </Box>
      <List>
        <ListItem disablePadding className={currentPath.id == 1?'current':''} onClick={() => {
          NavlinkActivation(1,'/')
        }}>
          <ListItemButton>
            <ListItemIcon>
              <HomeFilledIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className={currentPath.id == 2?'current':''} onClick={() => {
          NavlinkActivation(2,'/shop')
        }}>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBagIcon />
            </ListItemIcon>
            <ListItemText primary={'Shop'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className={currentPath.id == 3?'current':''} onClick={() => {
          NavlinkActivation(3,'/about')
        }}>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={'About'} path='/about' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className={currentPath.id == 4?'current':''} onClick={() => {
          NavlinkActivation(4,'/contact')
        }}>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact us'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Box sx={{p:3, mt: 2}}>
        <Typography sx={{fontSize:'14px'}}>Need help? Call Us: <b>+84 2500 888 33</b></Typography>
      </Box>
    </Box>
  );
  const searchDrawer = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      // onClick={toggleDrawer2(false)}
      // onKeyDown={toggleDrawer2(false)}
    >
      <Box sx={{p:2, pb: 0}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
          <Box>
            <form className="predictive-search__form" action="/search" method="get" role="search">
                <button className="btn-search-header-two">
                    <div className="icon-header">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                </button>
                <input className="predictive-search__input" is="ap-predictivesearchinput" type="text" name="q" autocomplete="off" autocorrect="off" ap-controlsaria="search-drawer" ap-expanded-aria="false" aria-label="Search" placeholder="Search our store..." style={{outline:0,}} />
            </form>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box sx={{p:3, mt: 2}}>
        <Typography sx={{fontSize:'14px'}}>Need help? Call Us: <b>+84 2500 888 33</b></Typography>
      </Box>
    </Box>
  );


  return (
    <Box sx={{ flexGrow: 1, position:'fixed', width:'100%', zIndex:'999' }}>
      <AppBar position="static" sx={{backgroundColor:'white', color:'#000000a3'}}>
        <Toolbar>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton
              size="large"
              edge="start"
              color="#027a36"
              aria-label="open drawer"
              // sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
              <MenuBookRoundedIcon sx={{color:'#027a36'}} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'block', sm: 'block', color:'#027a36' } }}
            >
              StudyCraft
            </Typography>
          </Box>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box className="header-icon search-icon-text header-search">
            <div className="header__search-bar predictive-search">
                <form className="predictive-search__form" action="/search" method="get" role="search">
                    {/* <input type="hidden" name="type" value="product">
                    <input type="hidden" name="options[prefix]" value="last">
                    <input type="hidden" name="options[unavailable_products]" value="last"> */}
                    <input className="predictive-search__input" is="ap-predictivesearchinput" type="text" name="q" autocomplete="off" autocorrect="off" ap-controlsaria="search-drawer" ap-expanded-aria="false" aria-label="Search" placeholder="Search our store..." style={{outline:0,}} />
                    <button className="btn-search-header">
                        <div className="icon-header">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span>Search</span>
                    </button>
                </form>
            </div>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={1} color="error">
                <FavoriteBorderRoundedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                <AddShoppingCartRoundedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={toggleDrawer2(true)}
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              {open1?<MenuOpenIcon/> :<MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
        <Divider />
        <Toolbar sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Box sx={{display:'flex', alignItems:'center', width:{xs: '100%', md:'fit-content'}, justifyContent:{xs:'space-between', md:'normal'}}}>
            <div className="menu-categories">
              <button className="header__icon-wrapper tap-area" id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                <div className="categories-title">
                  <p className="nav-categories-title">all category</p>
                  <div className="icon-title_categories-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                        <path d="M0.375 1.15625C0.411458 0.755208 0.630208 0.536458 1.03125 0.5H11.9688C12.3698 0.536458 12.5885 0.755208 12.625 1.15625C12.5885 1.55729 12.3698 1.77604 11.9688 1.8125H1.03125C0.630208 1.77604 0.411458 1.55729 0.375 1.15625ZM0.375 5.53125C0.411458 5.13021 0.630208 4.91146 1.03125 4.875H11.9688C12.3698 4.91146 12.5885 5.13021 12.625 5.53125C12.5885 5.93229 12.3698 6.15104 11.9688 6.1875H1.03125C0.630208 6.15104 0.411458 5.93229 0.375 5.53125ZM12.625 9.90625C12.5885 10.3073 12.3698 10.526 11.9688 10.5625H1.03125C0.630208 10.526 0.411458 10.3073 0.375 9.90625C0.411458 9.50521 0.630208 9.28646 1.03125 9.25H11.9688C12.3698 9.28646 12.5885 9.50521 12.625 9.90625Z" fill="currentColor"></path>
                      </svg>
                  </div>
                </div>
              </button>
            </div>
            <Box className='lower-nav' sx={{display: {xs: 'none', md:'flex'}}}>
              <List sx={{display:'flex', alignItems:'center', gap:'5px'}}>
                  <ListItem className={currentPath.id == 1?'current':''} onClick={() => {
                    NavlinkActivation(1,'/')
                  }}>Home</ListItem>
                  <ListItem className={currentPath.id == 2?'current':''} onClick={() => {
                    NavlinkActivation(2,'/shop')
                  }}>Shop</ListItem>
                  <ListItem className={currentPath.id == 3?'current':''} onClick={() => {
                    NavlinkActivation(3,'/about')
                  }}>About</ListItem>
                  <ListItem className={currentPath.id == 4?'current':''} onClick={() => {
                    NavlinkActivation(4,'/contact')
                  }}>Contact</ListItem>
              </List>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={1} color="error">
                  <FavoriteBorderRoundedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <AddShoppingCartRoundedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{display: {xs: 'none', md:'block'}}}>
            <Typography sx={{fontSize:'14px'}}>Need help? Call Us: <b>+84 2500 888 33</b></Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
        sx={{mt:1, width:'210px', color:'gray'}}
      >
        <MenuItem onClick={handleClose}>
          <Box sx={{fontSize:'1rem', display:'flex', alignItems:'center', color:'#707070'}}>
            <MenuBookRoundedIcon sx={{fontSize: '22px', mr: 2}} />
            <Typography>Books</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Box sx={{fontSize:'1rem', display:'flex', alignItems:'center', color:'#707070'}}>
            <DevicesOtherIcon sx={{fontSize: '22px', mr: 2}} />
            <Typography>Stationary</Typography>
          </Box>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
      <Drawer open={open1} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>

      <Drawer anchor='right' open={open2} onClose={toggleDrawer2(false)}>
        {searchDrawer()}
      </Drawer>
    </Box>
  );
}
