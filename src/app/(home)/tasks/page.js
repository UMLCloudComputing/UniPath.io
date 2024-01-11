"use client";

// Component Imports
import Column from './Column';

// Data Imports
import { initialData } from './initialData';

// DND
// Not used yet
import { DragDropContext } from 'react-beautiful-dnd';

// React
import * as React from 'react';

// MUI
import { Typography } from '@mui/material';



export default function Lists() {
    //   const [checked, setChecked] = React.useState([1]);
    //   const [impChecked, setImpChecked] = React.useState([1]);
    const data = initialData;

    return (
        data.columnOrder.map(columnId => {
            const column = data.columns[columnId];
            const tasks = column.tasksIds.map(taskId => data.tasks[taskId]);
            const title = column.title;
            return (
                <div style={{ display: 'inline-flex', flexDirection: 'row', rowGap: '20px' }}>
                    <div style={{ display: 'inline-flex', flexDirection: 'column', columnGap: '20px' }}>
                        <Typography variant='h4'>{title}</Typography>
                        <Column tasks={tasks} title={title} />
                    </div>
                </div>
            );
        }));
};