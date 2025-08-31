import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const MobileSidebar = () => {
    const navigation = useNavigate();
  const NavlinkActivation = (path) => {
   navigation(path);
  }
  return (
    <List>
      <ListItem disablePadding className='current'>
        <ListItemButton>
          <ListItemIcon>
            <HomeFilledIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingBagIcon />
          </ListItemIcon>
          <ListItemText primary={'Shop'} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={'About'} path='/about' />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary={'Contact us'} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export const NavbarActive = () => {
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
  )
}