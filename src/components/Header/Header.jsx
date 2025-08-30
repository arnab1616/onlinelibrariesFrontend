
import '../../styles/Header.css'
import React, { useState } from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import MoreIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import { List, ListItem, Stack } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [anchorEl1, setAnchorEl1] = React.useState(null);
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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <FavoriteBorderRoundedIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={1} color="error">
            <AddShoppingCartRoundedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, position:'fixed', width:'100%' }}>
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
              sx={{ display: { xs: 'none', sm: 'block', color:'#027a36' } }}
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
          <Box class="header-icon search-icon-text header-search d-xl-block d-none">
            <div class="header__search-bar predictive-search">
                <form class="predictive-search__form" action="/search" method="get" role="search">
                    {/* <input type="hidden" name="type" value="product">
                    <input type="hidden" name="options[prefix]" value="last">
                    <input type="hidden" name="options[unavailable_products]" value="last"> */}
                    <input class="predictive-search__input" is="ap-predictivesearchinput" type="text" name="q" autocomplete="off" autocorrect="off" ap-controlsaria="search-drawer" ap-expanded-aria="false" aria-label="Search" placeholder="Search our store..." style={{outline:0,}} />
                    <button class="btn-search-header">
                        <div class="icon-header">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
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
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Divider />
        <Toolbar sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center'}}>
            <div class="menu-categories">
              <button class="header__icon-wrapper tap-area" id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                <div class="categories-title">
                  <div class="nav-categories-title">all category</div>
                  <div class="icon-title_categories-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                        <path d="M0.375 1.15625C0.411458 0.755208 0.630208 0.536458 1.03125 0.5H11.9688C12.3698 0.536458 12.5885 0.755208 12.625 1.15625C12.5885 1.55729 12.3698 1.77604 11.9688 1.8125H1.03125C0.630208 1.77604 0.411458 1.55729 0.375 1.15625ZM0.375 5.53125C0.411458 5.13021 0.630208 4.91146 1.03125 4.875H11.9688C12.3698 4.91146 12.5885 5.13021 12.625 5.53125C12.5885 5.93229 12.3698 6.15104 11.9688 6.1875H1.03125C0.630208 6.15104 0.411458 5.93229 0.375 5.53125ZM12.625 9.90625C12.5885 10.3073 12.3698 10.526 11.9688 10.5625H1.03125C0.630208 10.526 0.411458 10.3073 0.375 9.90625C0.411458 9.50521 0.630208 9.28646 1.03125 9.25H11.9688C12.3698 9.28646 12.5885 9.50521 12.625 9.90625Z" fill="currentColor"></path>
                      </svg>
                  </div>
                </div>
              </button>
            </div>
            <nav className='lower-nav'>
              <List sx={{display:'flex', alignItems:'center'}}>
                  <ListItem className='current'>Home</ListItem>
                  <ListItem>Shop</ListItem>
                  <ListItem>About</ListItem>
                  <ListItem>Contact</ListItem>
              </List>
            </nav>
          </div>
          <div>
            <Typography sx={{fontSize:'14px'}}>Need help? Call Us: <b>+84 2500 888 33</b></Typography>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
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
    </Box>
  );
}
