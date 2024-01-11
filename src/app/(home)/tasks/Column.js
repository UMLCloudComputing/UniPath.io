
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { Typography } from '@mui/material';
import { PassThrough } from 'stream';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

export default function Column(tasks, title) {
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
    const [checked, setChecked] = React.useState(checkedInit);
    const [impChecked, setImpChecked] = React.useState(importantInit);

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
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            {tasks.tasks.map((value) => {
                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <Checkbox
                                size='medium'
                                color='secondary'
                                icon={<StarOutlineRoundedIcon />}
                                checkedIcon={<StarRoundedIcon />}
                                edge="end"
                                checked={impChecked.indexOf(value) !== -1}
                                onChange={handleImpToggle(value)}
                                inputProps={{ 'aria-labelledby': value.id }}
                            />
                        }
                        disablePadding
                    >
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