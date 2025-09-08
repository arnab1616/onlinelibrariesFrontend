import React, { useState } from 'react';
import PriceRange from './PriceRange';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Dialog, Box, DialogContent, IconButton, } from '@mui/material';
import { CloseOutlined, ExpandLess, ExpandMore } from '@mui/icons-material';

export const FilterModal = ({toggleModal, modal}) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
        <Dialog open={modal} maxWidth='sm' sx={{'& .MuiDialogContent-root': {backgroundColor: 'rgb(249, 245, 240)'}}} className='filter-modal'>
            <Box className='filter-modal-header'>
                <h3 className='hd-c'>Filters</h3>
                <IconButton onClick={toggleModal}>
                    <CloseOutlined />
                </IconButton>
            </Box>
            <DialogContent>
                <Box className='filter-section-box' sx={{maxWidth:'350px', width:'100%'}}>
                    <div className='filter-section-inner'>
                        <div className='form-group'>
                            <label htmlFor="">Search Product</label>
                            <input type="text" placeholder="Search product..." />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Product category</label>
                            <List name="productCategory" id="">
                                <ListItemButton onClick={() => setOpen(!open)} sx={{p: '0 0.3rem'}}>
                                    <ListItemText primary="Book" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <div className='form-group'>
                                            <div className='form-check'>
                                                <input type="checkbox" id="" />
                                                <label htmlFor="">Audio cd (28) </label>
                                            </div>
                                            <div className='form-check'>
                                                <input type="checkbox" id="" />
                                                <label htmlFor="">Ebook (28) </label>
                                            </div>
                                            <div className='form-check'>
                                                <input type="checkbox" id="" />
                                                <label htmlFor="">Hardcover (27) </label>
                                            </div>
                                            <div className='form-check'>
                                                <input type="checkbox" id="" />
                                                <label htmlFor="">Paperback </label>
                                            </div>
                                        </div>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={() => setOpen2(!open2)} sx={{p: '0 0.3rem'}}>
                                    <ListItemText primary="Stationary" />
                                    {open2 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>                            
                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <div className='form-group'>
                                            <div className='form-check'>
                                                <input type="checkbox" id="" />
                                                <label htmlFor="">Audio cd (28) </label>
                                            </div>
                                            <div className='form-check'>
                                                <input type="checkbox" id="" />
                                                <label htmlFor="">Ebook (28) </label>
                                            </div>
                                            <div className='form-check'>
                                                <input type="checkbox" id="" />
                                                <label htmlFor="">Hardcover (27) </label>
                                            </div>
                                            <div className='form-check'>
                                                <input type="checkbox" id="" />
                                                <label htmlFor="">Paperback </label>
                                            </div>
                                        </div>
                                    </List>
                                </Collapse>
                            </List>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Price</label>
                            <PriceRange />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Format</label>
                            <div className='form-check'>
                                <input type="checkbox" id="" />
                                <label htmlFor="">Audio cd (28) </label>
                            </div>
                            <div className='form-check'>
                                <input type="checkbox" id="" />
                                <label htmlFor="">Ebook (28) </label>
                            </div>
                            <div className='form-check'>
                                <input type="checkbox" id="" />
                                <label htmlFor="">Hardcover (27) </label>
                            </div>
                            <div className='form-check'>
                                <input type="checkbox" id="" />
                                <label htmlFor="">Paperback </label>
                            </div>
                        </div>
                    </div>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
