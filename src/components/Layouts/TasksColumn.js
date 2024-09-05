
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
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import { Typography } from '@mui/material';


// NOT DEVICE AGNOSTIC
// NOT MOBILE FIRST (YET)
// Column Component
export default function TasksColumn(tasks) {
    const checkedInit = [];
    const importantInit = [];

    tasks.tasks.map((value) => {
        if (value.checked) {
            checkedInit.push(value);
        }
        if (value.important) {
            importantInit.push(value);
        }
    });

    // States for animation
    const [checked, setChecked] = React.useState(checkedInit);
    const [impChecked, setImpChecked] = React.useState(importantInit);

    // Currently only able to handle toggling the states
    // Ideally would have backend integration to handle changes to the backend via AWS DynamoDB
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
            value.checked = true;
        } else {
            newChecked.splice(currentIndex, 1);
            value.checked = false;
        }

        setChecked(newChecked);
    };

    // Currently only able to handle toggling the states
    // Ideally would have backend integration to handle changes to the backend via AWS DynamoDB
    const handleImpToggle = (val) => () => {
        const currentPos = impChecked.indexOf(val);
        const newImpChecked = [...impChecked];

        if (currentPos === -1) {
            newImpChecked.push(val);
            val.important = true;
        } else {
            newImpChecked.splice(currentPos, 1);
            val.important = false;
        }

        setImpChecked(newImpChecked);
    };


    return (
        // Returns an MUI List
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            {/* Maps the tasks from the initialData file (At the moment, ideally cloud backend)*/}
            {tasks.tasks.map((value) => {
                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            // Important Checkbox (Star)
                            <Checkbox
                                size='medium'
                                color='secondary'
                                icon={<StarOutlineRoundedIcon />}
                                checkedIcon={<StarRoundedIcon />}
                                edge="end"
                                // Checked on whether the value is mapped as checked within the impChecked state
                                checked={impChecked.indexOf(value) !== -1}
                                onChange={handleImpToggle(value)}
                                inputProps={{ 'aria-labelledby': value.id }}
                            />
                        }
                        disablePadding
                    >
                        {/* Task itself */}
                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    size='medium'
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': value.id }}
                                />
                            </ListItemIcon>
                            {/* Task Text, primary and secondary */}
                            <ListItemText
                                id={value.id}
                                primary={<Typography variant='h6'>{value.content}</Typography>}
                                secondary={<Typography style={{ color: '#9966ff' }}>
                                    <CalendarTodayRoundedIcon style={{ fontSize: 'inherit' }} />
                                    {' '}{value.date}
                                </Typography>}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}