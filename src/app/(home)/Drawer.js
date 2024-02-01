// React
import React, {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation'

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
import {useTheme} from '@mui/material/styles';
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


/**
 * A responsive drawer which opens from the left side.
 * It includes links to 'Pathways', 'Tasks', 'Support', 'Home Page', and 'Settings'.
 * The active link is determined by the current URL pathname.
 *
 * @param {Object} props - The properties passed to this component.
 * @param {number} props.drawerWidth - The width of the drawer.
 * @param {boolean} props.open - The state of the drawer (open or closed).
 * @param {Function} props.handleDrawerClose - The function to handle the closing of the drawer.
 * @param {Function} props.handleDrawerOpen - The function to handle the opening of the drawer.
 *
 * @returns {ReactElement} The React Element created by this function.
 */export default function DrawerComponent({drawerWidth, open, handleDrawerClose, handleDrawerOpen}) {

    // NextJS: Get current URL pathname
    const pathname = usePathname()


    // React Vars and Hooks
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));   // Using a media query to determine screen size
    const drawerVariant = isMobile ? 'temporary' : 'permanent'; // Determine drawer variant based on screen size
    // const [pathwaysOpen, setPathwaysOpen] = useState(true);
    // const [tasksOpen, setTasksOpen] = useState(true);
    //
    // const [settingsOpen, setSettingsOpen] = useState(true);
    // const [supportOpen, setSupportOpen] = useState(true);
    //
    // const handlePathwaysClick = () => {
    //     setPathwaysOpen(!pathwaysOpen);
    // };
    //
    // const handleTasksClick = () => {
    //     setTasksOpen(!tasksOpen);
    // };
    //
    // const handleSettingsClick = () => {
    //     setSettingsOpen(!settingsOpen);
    // };
    //
    // const handleSupportClick = () => {
    //     setSupportOpen(!supportOpen);
    // };

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
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', ...theme.mixins.toolbar}}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </Box>
            <List>

                {/* Pathways */}
                <ListItemButton href='/pathways' selected={pathname === '/pathways'}>
                    <ListItemIcon>
                        <PathIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pathways"/>
                    {/* {pathwaysOpen ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                {/* <Collapse in={pathwaysOpen} timeout="auto" unmountOnExit>
                    Sub-items for Pathways can go here
                </Collapse> */}

                {/* Tasks */}
                <ListItemButton href='/tasks' selected={pathname === '/tasks'}>
                    <ListItemIcon>
                        <TaskIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Tasks"/>
                    {/* {tasksOpen ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                {/* <Collapse in={tasksOpen} timeout="auto" unmountOnExit>
                    Sub-items for Tasks can go here
                </Collapse> */}

            </List>

            {/* Spacer element to push the following List to the bottom */}
            <Box sx={{flexGrow: 1}}/>
            <Divider/>

            <List>
                <ListItemButton href={"/support"} selected={pathname === '/support'}>
                    <ListItemIcon>
                        <SupportIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Support"/>
                </ListItemButton>
                <ListItemButton href="/home">
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home Page"/>
                </ListItemButton>
                <ListItemButton href={"/settings"} selected={pathname === '/settings'}>
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItemButton>
            </List>
        </Drawer>
    );
}
