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
import { Tab } from '@mui/material';

export default function TaskCard() {
    const theme = useTheme();
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Card sx={{ width: '50%' }}>
                <CardActions>
                    <Button>
                        <AddTaskIcon color='blue' />
                        <Box width={'5px'} />
                        <Typography>
                            Add Task
                        </Typography>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}