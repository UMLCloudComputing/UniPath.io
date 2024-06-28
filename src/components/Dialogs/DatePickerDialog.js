//React
import * as React from 'react';

//MUI
import { Dialog } from "@mui/material";
import { StaticDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DatePickerDialog ()
{
    return (
        <Dialog >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker />
            </LocalizationProvider>
        </Dialog>
    );
} 