
// React
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

// Material UI
import Drawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Material UI: Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/LiveHelp';
import PathIcon from '@mui/icons-material/Map'; // Placeholder for 'Pathways' icon
import TaskIcon from '@mui/icons-material/CheckCircleOutline'; // Placeholder for 'Tasks' icon
import HomeIcon from '@mui/icons-material/Home';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


// Component: DrawerComponent
export default function DrawerComponent({ drawerWidth, open, handleDrawerClose, handleDrawerOpen }) {

    // NextJS: Get current URL pathname
    const pathname = usePathname()

    // React Vars and Hooks
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));   // Using a media query to determine screen size
    const drawerVariant = isMobile ? 'temporary' : 'permanent'; // Determine drawer variant based on screen size
    const [pathwaysOpen, setPathwaysOpen] = useState(true);
    const [tasksOpen, setTasksOpen] = useState(true);

    const handlePathwaysClick = () => {
        setPathwaysOpen(!pathwaysOpen);
    };

    const handleTasksClick = () => {
        setTasksOpen(!tasksOpen);
    };

    return (
        <Drawer
            variant={drawerVariant}
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    transition: (theme) => theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                },
                ...(open && {
                    width: drawerWidth,
                }),
                ...(!open && {
                    width: `calc(${theme.spacing(7)} + 1px)`,
                    [theme.breakpoints.up('sm')]: {
                        width: `calc(${theme.spacing(8)} + 1px)`,
                    },
                    '& .MuiDrawer-paper': {
                        width: `calc(${theme.spacing(7)} + 1px)`,
                        [theme.breakpoints.up('sm')]: {
                            width: `calc(${theme.spacing(8)} + 1px)`,
                        },
                        overflow: 'hidden',
                    },
                }),
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', ...theme.mixins.toolbar }}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </Box>
            <List>

                {/* Pathways */}
                <ListItemButton onClick={handlePathwaysClick} href='/pathways' selected={pathname === '/pathways'}>
                    <ListItemIcon>
                        <PathIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pathways" />
                    {/* {pathwaysOpen ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                {/* <Collapse in={pathwaysOpen} timeout="auto" unmountOnExit>
                    Sub-items for Pathways can go here
                </Collapse> */}

                {/* Tasks */}
                <ListItemButton onClick={handleTasksClick} href='/tasks' selected={pathname === '/tasks'}>
                    <ListItemIcon>
                        <TaskIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tasks" />
                    {/* {tasksOpen ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                {/* <Collapse in={tasksOpen} timeout="auto" unmountOnExit>
                    Sub-items for Tasks can go here
                </Collapse> */}

            </List>

            {/* Spacer element to push the following List to the bottom */}
            <Box sx={{ flexGrow: 1 }} />
            <Divider />

            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <SupportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Support" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home Page" href='/#' />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
            </List>
        </Drawer>
    );
}
