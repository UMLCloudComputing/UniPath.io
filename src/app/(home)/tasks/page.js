"use client";

// React imports
import React, { useState, useMemo, useEffect, useReducer } from 'react';

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

import { Box, Skeleton } from "@mui/material";
import { Description } from '@mui/icons-material';
export default function Lists ()
{
    const client = generateClient({ authMode: 'userPool' });

    // State management    
    const [tasks, setTasks] = useState(new Map());
    const [isLoading, setIsLoading] = useState(true);

    // Use theme from Material UI
    const theme = useTheme();

    const fetchTasks = () =>
    {
        client.models.Tasks.list().then(({ data, errors }) =>
        {
            let newMap = new Map();
            if(errors) {
                console.error(errors);
            } else {
                for(const task of data) {
                    newMap.set(task.id, task);
                }

                setIsLoading(false);
                setTasks(newMap);
            }
        });
    }

    useEffect(() => {fetchTasks()}, []);

    const handleTaskDelete = async (id) =>
    {
        let newMap = new Map(tasks);
        const { data, errors } = await client.models.Tasks.delete({ id: id });
        if (errors) {
            console.log(errors);
        } else {
            newMap.delete(id);
            setTasks(newMap);
        }
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

        if (errors) {
            console.log(errors);
        } else {
            let newMap = (new Map(tasks)).set(data.id, data);
            setTasks(newMap);
        }
        console.log('added a task');
    }

    const handleTitleChange = async (id, title) => {
        const { errors, data } = await client.models.Tasks.update({
            "id": id, 
            "title": title,
        })

        if (errors) {
            console.log(errors);
        } else {
            let newMap = (new Map(tasks)).set(data.id, data);
            setTasks(newMap);
        }
        console.log(`updated task ${title}'s title`);
    }

    const handleDescriptionChange = async (id, description) => {
        const { errors, data } = await client.models.Tasks.update({
            "id": id, 
            "details": description,
        })

        if (errors) {
            console.log(errors);
        } else {
            let newMap = (new Map(tasks)).set(data.id, data);
            setTasks(newMap);
        }
        console.log(`updated task ${description}'s desc`);
    }

    const handleImportantChange = async (id, important) => {
        const { errors, data } = await client.models.Tasks.update({
            "id": id,
            "important": important
        })

        if (errors) {
            console.log(errors);
        } else {
            let newMap = (new Map(tasks)).set(data.id, data);
            setTasks(newMap);
        }
        console.log(`updated task ${data.title}'s importance`);
    }

    return (
        <>
            <TaskHeaderCard handleAddTask={handleTaskAddClick} />
            <Box>
                {
                    Array.from(tasks.values()).map((t, index) =>
                    {
                        return (
                            (index === tasks.length - 1) ?
                            <TaskCard key={t.id} task={t} borderBottomRadius={'20px'} onDeleteClick={() => handleTaskDelete(t.id)} onTitleChange={handleTitleChange} onDescriptionChange={handleDescriptionChange} onImportantChange={handleImportantChange}/>
                                : <TaskCard key={t.id} task={t} onDeleteClick={() => handleTaskDelete(t.id)} onTitleChange={handleTitleChange} onDescriptionChange={handleDescriptionChange} onImportantChange={handleImportantChange}/>
                        )
                    })
                }
            </Box>
        </>
    );
}