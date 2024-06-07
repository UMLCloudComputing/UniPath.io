"use client";
//MUI
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';

//React
import React from 'react';

export default function TaskCard() {

    return (
        <>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <Card sx={{ width: '50%', borderRadius: '0px' }}>
                    <div style={{ justifyContent: 'left', display: 'flex', alignItems:'center' }}>
                        <Radio size='small' />
                        <TextField placeholder='Title' variant='standard' sx={{ width: '100%' }} InputProps={{ disableUnderline: 'true' }} />
                    </div>
                </Card>
            </div>
        </>
    );
}