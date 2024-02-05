// React
import * as React from 'react';

// MUI imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function TaskDialog({ open, handleClose, handleAddTaskCard }) {
    // need to work on the PaperProps
    const [openCalendar, setOpenCalendar] = React.useState(false);

    function handleCalendarIconClick() {
        setOpenCalendar(true);
    }

    function handleCloseCalendar() {
        setOpenCalendar(false);
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{

                }}
            >
                <DialogTitle>Create Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="taskTitle"
                        name="taskTitle"
                        label="Task Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    >
                    </TextField>
                    {/* Could be better if the below text field's a text box */}
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="taskText"
                        name="taskText"
                        label="Enter Tasks"
                        type="text"
                        fullWidth
                        variant="standard"
                    >
                    </TextField>

                    {/* Add date functionality below as well */}
                    <div className='addDate' style={{
                        flexDirection: 'row',
                        display: 'inline-flex'
                    }}>
                        {/* Change so that Add date aligns with the calendar icon */}
                        <Typography>Add date</Typography>
                        <IconButton
                            onClick={handleCalendarIconClick}
                        >
                            <CalendarMonthIcon></CalendarMonthIcon>
                        </IconButton>
                    </div>

                    {/* Actions to perform (cancel, add) */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} onClose={handleCloseCalendar}>Cancel</Button>
                    <Button type="submit">Add</Button> {/* Need to add functionality */}
                </DialogActions>
            </Dialog>
        </>
    );
} 