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

import {Box} from "@mui/material";

export default function Lists ()
{
    // State management    
    const [tasks, setTasks] = useState(initialTasks);

    // Use theme from Material UI
    const theme = useTheme();

    return (
        <>
            <TaskHeaderCard />
            <Box>
                {
                    initialTasks.map((t) =>
                    {
                        return (
                            <TaskCard key={t.id} task={t} />
                        )
                    })
                }
            </Box>
        </>
    );
}