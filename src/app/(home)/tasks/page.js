"use client";

// React imports
import React, { useState, useMemo } from 'react';

// Material UI imports
import { useTheme } from '@mui/material/styles';

// Component Imports
import Column from '../../../components/Layouts/TasksColumn';

// Data Imports
import { initialTasks } from '@/components/Data/initialData';

// Assuming DragDropContext will be used later
import { DragDropContext } from '@hello-pangea/dnd';
import TaskHeaderCard from "../../../components/Cards/TaskHeaderCard";
import TaskCard from "../../../components/Cards/TaskCard";

import { Box } from "@mui/material";

export default function Lists ()
{
    // State management    
    const [tasks, setTasks] = useState(initialTasks);

    // Use theme from Material UI
    const theme = useTheme();

    const handleTaskDelete = (id) =>
    {
        setTasks(tasks.filter((t) => t.id !== id));
        console.log('deleted');
    }

    return (
        <>
            <TaskHeaderCard />
            <Box>
                {
                    tasks.map((t, index) =>
                    {
                        return (
                            (index === tasks.length - 1) ?
                                <TaskCard key={t.id} task={t} borderBottomRadius={'20px'} onDeleteClick={() => handleTaskDelete(t.id)} />
                                : <TaskCard key={t.id} task={t} onDeleteClick={() => handleTaskDelete(t.id)} />
                        )
                    })
                }
            </Box>
        </>
    );
}