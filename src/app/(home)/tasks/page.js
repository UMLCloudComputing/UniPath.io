"use client";

// React use state
import useState from 'react';

// Component Imports
import Column from './Column';
import TaskDialog from './TaskDialog';

// Data Imports
import { initialData } from './initialData';

// DND
// Not used yet
import { DragDropContext } from 'react-beautiful-dnd';

// React
import * as React from 'react';

// MUI
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';



export default function Lists ()
{
    //   const [checked, setChecked] = React.useState([1]);
    //   const [impChecked, setImpChecked] = React.useState([1]);

    const data = initialData;
    const theme = useTheme();

    return (
        data.columnOrder.map(columnId =>
        {
            const column = data.columns[columnId];
            const tasks = column.tasksIds.map(taskId => data.tasks[taskId]);
            const title = column.title;

            const [open, setOpen] = React.useState(false);

            function handlePlusClick ()
            {
                setOpen(true);
            }

            function handleTaskDialogClose ()
            {
                setOpen(false);
            }

            return (
                <>
                    <Box>
                        <TaskDialog
                            open={open}
                            handleClose={handleTaskDialogClose}
                        >
                        </TaskDialog>
                    </Box>
                    <div style={{ display: 'inline-flex', flexDirection: 'row', rowGap: '20px' }}>
                        <div style={{ display: 'inline-flex', flexDirection: 'column', columnGap: '20px' }}>
                            <Typography variant='h4'>{title}</Typography>
                            <Column tasks={tasks} title={title} />
                        </div>
                    </div>
                    <div>
                        <IconButton
                            onClick={() => handlePlusClick()}
                        >
                            <AddCircleOutlineIcon
                                sx={{
                                    position: 'fixed',
                                    bottom: '4%',
                                    right: '4%',
                                    fontSize: '40px',
                                    color: theme.palette.primary.main
                                }}
                            >
                            </AddCircleOutlineIcon>
                        </IconButton>
                    </div>
                </>
            );
        }));
};