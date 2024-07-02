"use client"

//React
import React, { useState } from 'react';

//MUI
import { Dialog } from "@mui/material";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DatePickerDialog({ dateValue, setDateValue, setOpenCalendarDialog, openCalendarDialog, onClose }) {

    const onAccept = (value) => {
        console.log("output from onAccept:" + value);
        setDateValue(dayjs(value));
        setOpenCalendarDialog(false);
    }

    const handleCloseDialog = () => {
        setOpenCalendarDialog(false);
    }

    return (
        <Dialog open={openCalendarDialog} onClose={onClose}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    slotProps={{
                        actionBar: {
                            actions: ['cancel', 'accept'],
                            onCancel: handleCloseDialog,
                        },
                    }}
                    value={dateValue}
                    onAccept={(value) => { onAccept(value) }}
                    open={openCalendarDialog}
                />
            </LocalizationProvider>
        </Dialog>
    );
} 