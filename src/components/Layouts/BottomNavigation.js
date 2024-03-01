
// React
import * as React from 'react';
import { usePathname } from 'next/navigation'

// Material UI
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

// Material UI Icons
import PathIcon from '@mui/icons-material/Map'; // Placeholder for 'Pathways' icon
import TaskIcon from '@mui/icons-material/CheckCircleOutline'; // Placeholder for 'Tasks' icon
import NotificationIcon from '@mui/icons-material/Notifications'; // Placeholder for 'Notifications' icon
import SettingsIcon from '@mui/icons-material/Settings';


/**
 * SimpleBottomNavigation renders a bottom navigation bar.
 * It includes links to 'Pathways', 'Tasks', 'Notifications', and 'Settings'.
 * The active link is determined by the current URL pathname.
 *
 * @returns {ReactElement} The React Element created by this function.
 */
export default function SimpleBottomNavigation() {

    // NextJS: Get current URL pathname
    const pathname = usePathname()

    // React: State
    const [value, setValue] = React.useState(
        pathname === '/pathways' ? 0 :
        pathname === '/tasks' ? 1 :
        pathname === '/notifications' ? 2 :
        pathname === '/settings' ? 3 : 0
    );

    return (
        <Paper elevation={3} sx={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0,
            right: 0,
            display: { xs: 'block', md: 'none' },
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Pathways" icon={<PathIcon />} href='/pathways' />
                <BottomNavigationAction label="Tasks" icon={<TaskIcon />} href='/tasks' />
                <BottomNavigationAction label="Notifications" icon={<NotificationIcon />} href='/notifications' />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} href='/settings' />
            </BottomNavigation>
        </Paper>
    );
}