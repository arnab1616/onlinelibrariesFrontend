import { IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import React from 'react'

export const TopCard = () => {
    return (
        <div className='top-card'>
            <div className='top-card-inner'>
                <div className='profile-logo-box'>
                    {/* <img src="/images/profile-male-icon.png" alt="" /> */}
                    <div className='profile-logo-box-inner' style={{ backgroundImage: "url(/images/profile-male-icon.png)" }}>
                        <div className='edit-btn'>
                            <IconButton>
                                <CreateIcon color='inherit' />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Hello,</span>
                    <h1>Arnab Chaulya</h1>
                </div>
            </div>
        </div>
    )
}
