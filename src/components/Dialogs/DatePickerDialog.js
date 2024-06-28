//React
import * as React from 'react';

//MUI
import { Dialog } from "@mui/material";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DatePickerDialog ({ openCalendarDialog, onClose })
{

    return (
        <Dialog open={openCalendarDialog} onClose={onClose}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker />
            </LocalizationProvider>
        </Dialog>
    );
} 