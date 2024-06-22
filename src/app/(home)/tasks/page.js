"use client";

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
import { DragDropContext } from '@hello-pangea/dnd';
import TaskHeaderCard from "../../../components/Cards/TaskHeaderCard";
import TaskCard from "../../../components/Cards/TaskCard";

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
            <TaskHeaderCard />
            <TaskCard />
        </>
    );
}
