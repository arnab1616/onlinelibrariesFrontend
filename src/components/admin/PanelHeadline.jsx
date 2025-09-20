import React from 'react'
import { useSelector } from 'react-redux';

export const PanelHeadline = () => {
    const { currentPath } = useSelector((state) => state.adminHeader);
    return (
        <div style={{marginBottom:'2rem'}}>
            <h2 className='hd-c'>{currentPath?.pathName}</h2>
            <p className='p-c'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}
