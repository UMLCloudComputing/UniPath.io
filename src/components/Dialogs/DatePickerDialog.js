"use client"

//React
import React, { useState } from 'react';

//MUI
import { Dialog } from "@mui/material";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DatePickerDialog ({ dateValue, setDateValue, setOpenCalendarDialog, openCalendarDialog, onClose })
{
    const onChange = (value) =>
    {
        console.log("output from onChange:" + value)
        setDateValue(dayjs(value));
        setOpenCalendarDialog(false);
    }
    return (
        <Dialog open={openCalendarDialog} onClose={onClose}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker slots={{ actionBar: "div" }} value={dateValue} onChange={(value) => onChange(value)} />
            </LocalizationProvider>
        </Dialog>
    );
} 