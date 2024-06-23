"use client";
// MUI
import Box from '@mui/material/Box';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// React
import React from 'react';

export default function TaskHeaderCard ()
{
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ width: '50%', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', borderBottomRightRadius: '0px', borderBottomLeftRadius: '0px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'left' }}>
                        <Typography variant='h4' sx={{ marginLeft: '2%' }}>
                            My Tasks
                        </Typography>

                        <IconButton sx={{ marginLeft: 'auto', marginRight: '2%', top: '3px', position: 'relative' }}>
                            <Tooltip title='More options' arrow>
                                <MoreVertOutlined />
                            </Tooltip>
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