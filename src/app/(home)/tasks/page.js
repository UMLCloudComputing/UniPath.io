"use client";

// React imports
import React, { useState, useMemo, useEffect } from 'react';

// Material UI imports
import { useTheme } from '@mui/material/styles';

// Component Imports
import Column from '../../../components/Layouts/TasksColumn';

// Data Imports
import { initialTasks } from '@/components/Data/initialData';
import { generateClient } from "aws-amplify/data";


// Assuming DragDropContext will be used later
import { DragDropContext } from '@hello-pangea/dnd';
import TaskHeaderCard from "@/components/Cards/TaskHeaderCard";
import TaskCard from "@/components/Cards/TaskCard";

import { Box } from "@mui/material";
export default function Lists ()
{
    const client = generateClient({ authMode: 'userPool' });

    // State management    
    const [tasks, setTasks] = useState([]);

    // Use theme from Material UI
    const theme = useTheme();

    const fetchTasks = () =>
    {
        client.models.Tasks.list().then(({ data, errors }) =>
        {
            errors ? console.error(errors) :
                setTasks(data);
        });
    }

    useEffect(() => fetchTasks(), []);

    const handleTaskDelete = async (id) =>
    {
        const { data, errors } = await client.models.Tasks.delete({ id: id });
        errors ? console.error(errors) :
            fetchTasks();
        console.log('deleted');
    }

    const handleTaskAddClick = async () =>
    {
        const { errors, data } = await client.models.Tasks.create({
            title: "",
            details: "",
            date: null,
            important: false,
            done: false
        })
        errors ? console.error(errors) :
            fetchTasks();
        console.log('added a task');
    }

    return (
        <>
            <TaskHeaderCard handleAddTask={handleTaskAddClick} />
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