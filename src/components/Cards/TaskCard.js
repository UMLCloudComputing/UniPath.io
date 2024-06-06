"use client";
// MUI
import Box from '@mui/material/Box';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';


// React
import React from 'react'

export default function TaskCard(){
    return(
        <Card>
            <AddTaskIcon></AddTaskIcon> <CardActions>Add Task</CardActions>
        </Card>
    );
}