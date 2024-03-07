"use client";

// Ensuring client-side execution in Next.js
import { useClient } from 'next/client';

// React imports
import React, { useState, useMemo } from 'react';

// Material UI imports
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

// Component Imports
import Column from '../../../components/Layouts/TasksColumn';
import TaskDialog from '@/components/Dialogs/TaskDialog';

// Data Imports
import { initialData } from '@/components/Data/initialData';

// Assuming DragDropContext will be used later
import { DragDropContext } from 'react-beautiful-dnd';

export default function Lists() {
    // State management
    const [open, setOpen] = useState(false);
    const handlePlusClick = () => setOpen(true);
    const handleTaskDialogClose = () => setOpen(false);

    // Use theme from Material UI
    const theme = useTheme();

    // Memoize data to avoid recomputation on every render
    const data = useMemo(() => initialData, []);

    return (
        <>
            {data.columnOrder.map((columnId) => {
                const column = data.columns[columnId];
                const tasks = column.tasksIds.map((taskId) => data.tasks[taskId]);
                const title = column.title;

                return (
                    <Box key={columnId} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TaskDialog open={open} handleClose={handleTaskDialogClose} />
                        <Typography variant="h4">{title}</Typography>
                        <Column tasks={tasks} title={title} />
                        <IconButton
                            onClick={handlePlusClick}
                            sx={{
                                position: 'fixed',
                                bottom: '4%',
                                right: '4%',
                                fontSize: '40px',
                                color: theme.palette.primary.main,
                            }}
                        >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </Box>
                );
            })}
        </>
    );
}
