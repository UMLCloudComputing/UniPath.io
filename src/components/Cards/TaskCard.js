"use client";
//MUI
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import IconButton from '@mui/material/IconButton';
import NotesIcon from '@mui/icons-material/Notes';
import List from '@mui/material/List';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

//React
import React from 'react';

export default function TaskCard() {

    return (
        <>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                
                <Card sx={{ width: '50%', borderRadius: '0px' }}>
                    
                    <div style={{ justifyContent: 'left', display: 'flex', alignItems: 'center' }}>
                        <Radio size='small' />
                        <TextField placeholder='Title' variant='standard' sx={{ width: '100%' }} InputProps={{ disableUnderline: 'true' }} />
                    </div>
                    
                    <div style={{ justifyContent: 'left', display: 'flex', alignItems: 'center' }}>
                        <NotesIcon sx={{ marginLeft: '1.1%' }} />
                        <TextField placeholder='Details' variant='standard' sx={{ width: '100%', marginLeft: '1%' }} InputProps={{ disableUnderline: 'true' }} />
                    </div>
                    
                    <div style={{ justifyContent: 'left', display:'flex', alignItems:'center'}}>
                        <CalendarMonthIcon />
                    </div>
                </Card>
            </div>
        </>
    );
}