"use client";
//MUI
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import NotesIcon from '@mui/icons-material/Notes';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


//React
import React from 'react';

export default function TaskCard ()
{

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

                    <div style={{ justifyContent: 'left', display: 'flex', alignItems: 'center' }}>
                        <Button sx={{ textTransform: 'inherit', width: '100%', justifyContent: 'left', borderRadius: '20px', '&:hover': { backgroundColor: '#d3d3d3' }, '&:active': { backgroundColor: '#d3d3d3' } }}>
                            <CalendarMonthIcon sx={{ color: 'gray' }} />
                            <Typography variant="body1" color="GrayText" sx={{ marginLeft: '1%' }}>
                                Date/time
                            </Typography>
                        </Button>
                    </div>
                </Card>
            </div>
        </>
    );
}