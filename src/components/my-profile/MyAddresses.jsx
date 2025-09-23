import { Box, FormControlLabel, IconButton, Radio, RadioGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import { AddressFormInfo } from './AddressFormInfo';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export const MyAddresses = () => {
    const [formVisibility, setFormVisibility] = useState(false);
    return (
        <Box className='my-addresses-section'>
            <h3 className='my-profile-sub-title'>Manage Addresses</h3>
            <div className='new-address-section'>
                <div className='new-address-inner'>
                    {!formVisibility && (
                    <div className='new-address-btn' onClick={() => setFormVisibility(!formVisibility)}>
                        <AddIcon />
                        <span>Add a New Address</span>
                    </div>)}
                    <div style={{marginBottom: formVisibility ? '2rem' : '0'}}>
                        <AddressFormInfo formVisibility={formVisibility} setFormVisibility={setFormVisibility} />
                    </div>
                </div>
            </div>
            <div className='address-list-section'>
                <div className='address-list-container'>
                    <div className='address-item'>
                        <div className='address-item-inner'>
                            <div className='address-action'>
                                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                    <IconButton><EditIcon sx={{fontSize:'20px'}} /></IconButton>
                                    <IconButton><DeleteIcon sx={{fontSize:'20px'}} /></IconButton>
                                </div>
                            </div>
                            <div className='address-type'>Home</div>
                            <div className='address-title'><span>Arnab Chaulya</span> <span>9382522438</span></div>
                            <div className='address-details'>Near ashabari apartment, Marru smriti,bikash guha colony,Nayabad, Kolkata, West Bengal - 700094</div>
                        </div>
                    </div>
                    <div className='address-item'>
                        <div className='address-item-inner'>
                            <div className='address-action'>
                                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                    <IconButton><EditIcon sx={{fontSize:'20px'}} /></IconButton>
                                    <IconButton><DeleteIcon sx={{fontSize:'20px'}} /></IconButton>
                                </div>
                            </div>
                            <div className='address-type'>Home</div>
                            <div className='address-title'><span>Arnab Chaulya</span> <span>9382522438</span></div>
                            <div className='address-details'>Near ashabari apartment, Marru smriti,bikash guha colony,Nayabad, Kolkata, West Bengal - 700094</div>
                        </div>
                    </div>
                    <div className='address-item'>
                        <div className='address-item-inner'>
                            <div className='address-action'>
                                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                    <IconButton><EditIcon sx={{fontSize:'20px'}} /></IconButton>
                                    <IconButton><DeleteIcon sx={{fontSize:'20px'}} /></IconButton>
                                </div>
                            </div>
                            <div className='address-type'>Home</div>
                            <div className='address-title'><span>Arnab Chaulya</span> <span>9382522438</span></div>
                            <div className='address-details'>Near ashabari apartment, Marru smriti,bikash guha colony,Nayabad, Kolkata, West Bengal - 700094</div>
                        </div>
                    </div>
                    <div className='address-item'>
                        <div className='address-item-inner'>
                            <div className='address-action'>
                                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                    <IconButton><EditIcon sx={{fontSize:'20px'}} /></IconButton>
                                    <IconButton><DeleteIcon sx={{fontSize:'20px'}} /></IconButton>
                                </div>
                            </div>
                            <div className='address-type'>Home</div>
                            <div className='address-title'><span>Arnab Chaulya</span> <span>9382522438</span></div>
                            <div className='address-details'>Near ashabari apartment, Marru smriti,bikash guha colony,Nayabad, Kolkata, West Bengal - 700094</div>
                        </div>
                    </div>
                    <div className='address-item'>
                        <div className='address-item-inner'>
                            <div className='address-action'>
                                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                    <IconButton><EditIcon sx={{fontSize:'20px'}} /></IconButton>
                                    <IconButton><DeleteIcon sx={{fontSize:'20px'}} /></IconButton>
                                </div>
                            </div>
                            <div className='address-type'>Home</div>
                            <div className='address-title'><span>Arnab Chaulya</span> <span>9382522438</span></div>
                            <div className='address-details'>Near ashabari apartment, Marru smriti,bikash guha colony,Nayabad, Kolkata, West Bengal - 700094</div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}
