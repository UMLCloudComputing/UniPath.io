"use client";
//MUI
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import NotesIcon from '@mui/icons-material/Notes';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Star } from "@mui/icons-material";
import dayjs from 'dayjs';

//React
import React, { useState } from 'react';
import DatePickerDialog from "../Dialogs/DatePickerDialog";


export default function TaskCard ({ task, borderBottomRadius, onDeleteClick })
{

    const { title, details, date, important, done } = task;

    const [isHovering, setIsHovering] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isImportant, setIsImportant] = useState(important);
    const [openCalendarDialog, setOpenCalendarDialog] = useState(false);
    const [dateValue, setDateValue] = useState(dayjs(date));
    const taskOptionsOpen = Boolean(anchorEl);

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleTaskOptionsClose = () => setAnchorEl(null);
    const handleTaskOptionsOpen = (event) => setAnchorEl(event.currentTarget);
    const handleImportantIconClick = () => setIsImportant(!isImportant);
    const handleDateIconClick = () => setOpenCalendarDialog(true);
    const handleCloseDialog = () => setOpenCalendarDialog(false);

    console.log(dateValue);


    const TaskOptionsMenu = (
        <Menu
            anchorEl={anchorEl}
            open={taskOptionsOpen}
            onClose={handleTaskOptionsClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}

            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <MenuItem onClick={onDeleteClick}>
                Delete
            </MenuItem>
        </Menu>
    )

    return (
        <>
            <Box sx={{ justifyContent: 'center', display: 'flex' }}>

                <Card sx={{ width: '50%', borderRadius: '0px', borderBottomRightRadius: borderBottomRadius, borderBottomLeftRadius: borderBottomRadius }}>

                    <Box sx={{ justifyContent: 'left', display: 'flex', alignItems: 'center', flexDirection: 'row' }} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
                        <Radio size='small' />
                        <TextField placeholder='Title' variant='standard' sx={{ width: '100%' }} InputProps={{ disableUnderline: 'true' }} defaultValue={title} />
                        {
                            (isHovering) ?
                                <>
                                    <IconButton sx={{ marginLeft: 'auto', marginRight: '-1%' }} size="small" onClick={handleTaskOptionsOpen}>
                                        <Tooltip title='More options' arrow>
                                            <MoreVertOutlined />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton sx={{ marginLeft: 'auto', marginRight: '1%' }} size="small" onClick={handleImportantIconClick}>
                                        <Tooltip title='Mark as important' arrow>
                                            {isImportant ? <Star sx={{ color: '#FFFF00' }} /> : <StarOutlineIcon />}
                                        </Tooltip>
                                    </IconButton>
                                    {TaskOptionsMenu}
                                </>
                                :
                                <></>
                        }

                    </Box>

                    <Box sx={{ justifyContent: 'left', display: 'flex', alignItems: 'center' }}>
                        <NotesIcon sx={{ marginLeft: '1.1%' }} />
                        <TextField placeholder='Details' variant='standard' sx={{ width: '100%', marginLeft: '1%' }} InputProps={{ disableUnderline: 'true' }} defaultValue={details} />
                    </Box>

                    <Box sx={{ justifyContent: 'left', display: 'flex', alignItems: 'center' }}>
                        <Button onClick={handleDateIconClick} sx={{ textTransform: 'inherit', width: '100%', justifyContent: 'left', borderRadius: '20px', '&:hover': { backgroundColor: '#d3d3d3' }, '&& .MuiTouchRipple-rippleVisible': { color: 'gray' } }}>
                            <CalendarMonthIcon sx={{ color: 'gray' }} />
                            <Typography variant="body1" color="GrayText" sx={{ marginLeft: '1%' }}>
                                {dateValue.format('MM/DD/YYYY')}
                            </Typography>
                        </Button>
                    </Box>
                </Card>
                <DatePickerDialog setDateValue={setDateValue} dateValue={dateValue} openCalendarDialog={openCalendarDialog} onClose={handleCloseDialog} setOpenCalendarDialog={setOpenCalendarDialog} />
            </Box>
        </>
    );
}