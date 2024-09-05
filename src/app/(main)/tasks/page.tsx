"use client";

// React imports
import React, { useState, useMemo, useEffect, useCallback } from 'react';

// Material UI imports
import { useTheme } from '@mui/material/styles';


// Data Imports
import { initialTasks } from '@/components/Data/initialData';
import { generateClient } from 'aws-amplify/data';


// Assuming DragDropContext will be used later
import { DragDropContext } from '@hello-pangea/dnd';
import TaskHeaderCard from "@/components/Cards/TaskHeaderCard";
import TaskCard from "@/components/Cards/TaskCard";

import { Box } from "@mui/material";
import { Schema } from 'ROOT/amplify/data/resource';
export default function Lists() {
    const client = generateClient<Schema>({ authMode: 'userPool' });

    // State management    
    const [tasks, setTasks] = useState<Schema["Task"]["type"][]>([]);

    // Use theme from Material UI
    const theme = useTheme();

    const fetchTasks = useCallback(async () => {
        const { data, errors } = await client.models.Task.list();
        errors ? console.error(errors) : setTasks(data);

    }, [client])


    useEffect(() => {
        fetchTasks()
    }, [fetchTasks]);

    const handleTaskDelete = async (id: any) => {
        const { data, errors } = await client.models.Task.delete({ id: id });
        errors ? console.error(errors) :
            fetchTasks();
        console.log('deleted');
    }

    const handleTaskAddClick = async () => {
        const { errors, data } = await client.models.Task.create({
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
                    tasks.map((t, index) => {
                        return (
                            (index === tasks.length - 1) ?
                                <TaskCard key={t.id} task={t} borderBottomRadius={'20px'} onDeleteClick={() => handleTaskDelete(t.id)} />
                                : <TaskCard key={t.id} task={t} borderBottomRadius={'0px'} onDeleteClick={() => handleTaskDelete(t.id)} />
                        )
                    })
                }
            </Box>
        </>
    );
}