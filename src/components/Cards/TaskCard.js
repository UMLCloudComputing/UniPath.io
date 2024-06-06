"use client";
// MUI
import Box from '@mui/material/Box';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


// React
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { MoreVertOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function TaskCard() {
    const theme = useTheme();
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ width: '50%', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', flexDirection:'row', width:'100%' }}>
                        <Typography variant='h4' sx={{ marginLeft: '2%' }}>
                            My Tasks
                        </Typography>

                        <IconButton style={{ marginLeft:'auto', marginRight:'2%' }}>
                            <MoreVertOutlined />
                        </IconButton>
                    </div>

                    <CardActions sx={{ width: '100%' }}>
                        <Button sx={{ textTransform: 'inherit', width: '100%', justifyContent: 'left', borderRadius: '20px', }}>
                            <AddTaskIcon color='blue' />
                            <Box width={'25px'} />
                            <Typography>
                                Add a task
                            </Typography>
                        </Button>
                    </CardActions>

                </Card>
            </div>
        </>
    );
}