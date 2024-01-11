"use client";

// Component Imports
import Column from './Column';

// Data Imports
import { initialData } from './initialData';

// DND
import { DragDropContext } from 'react-beautiful-dnd';

// React
import * as React from 'react';

// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { Typography } from '@mui/material';



export default function Lists() {
    //   const [checked, setChecked] = React.useState([1]);
    //   const [impChecked, setImpChecked] = React.useState([1]);
    const data = initialData;
    const handleToggle = (value) => () => {
        if (value.checked === false) {
            value.checked = true;
        } else {
            value.checked = false;
        }

        // const currentIndex = checked.indexOf(value);
        // const newChecked = [...checked];

        // if (currentIndex === -1) {
        //   newChecked.push(value);
        // } else {
        //   newChecked.splice(currentIndex, 1);
        // }

        // setChecked(newChecked);
    };

    const handleImpToggle = (val) => () => {
        if (val.important === true) {
            val.important = false;
        } else {
            val.important = true;
        }

        // const currentPos = impChecked.indexOf(val);
        // const newImpChecked = [...impChecked];

        // if (currentPos === -1){
        //     newImpChecked.push(val);
        // } else{
        //     newImpChecked.splice(currentPos, 1);
        // }

        // setImpChecked(newImpChecked);
    };
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
    // <List>
    //   {initialData.tasks.map((value) => {
    //     return (
    //       <ListItem
    //         key={value}
    //         secondaryAction={
    //           <Checkbox
    //             size='medium'
    //             color='secondary'
    //             icon={ <StarOutlineRoundedIcon/> }
    //             checkedIcon={ <StarRoundedIcon/> }
    //             edge="end"
    //             onChange={handleImpToggle(value)}
    //             checked={value.important}
    //             inputProps={{ 'aria-labelledby': value.id }}
    //           />
    //         }
    //         disablePadding
    //       >
    //         <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
    //           <ListItemIcon>
    //             <Checkbox
    //               size='medium'
    //               edge="start"
    //               checked={value.checked}
    //               tabIndex={-1}
    //               disableRipple
    //               inputProps={{ 'aria-labelledby': value.id }}
    //             />
    //           </ListItemIcon>
    //           <ListItemText id={labelId} primary={<Typography variant='h6'>{value.content}</Typography>} />
    //         </ListItemButton>
    //       </ListItem>
    //     );
    //   })}
    // </List>
}