import React, { useState } from 'react'
import PriceRange from './PriceRange'
import { Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Select, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const FilterSidebar = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        <div className='filter-section-box'>
            <div className='default-form-group'>
                <div className='filter-section-inner'>
                    <div className='form-group'>
                        <label htmlFor="">Search Product</label>
                        <input type="text" placeholder="Search product..." />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Product category</label>
                        <List name="productCategory" id="">
                            <ListItemButton onClick={() => setOpen(!open)}>
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
                            <ListItemButton onClick={() => setOpen2(!open2)}>
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
            </div>
        </div>
    )
}
