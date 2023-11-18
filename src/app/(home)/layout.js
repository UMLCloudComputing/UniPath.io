"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from './AppBar'; // Import AppBar component
import Drawer from './Drawer'; // Import Drawer component

const drawerWidth = 240;

export default function Layout() {
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        console.log('handleDrawerClose');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                drawerWidth={drawerWidth}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />
            <Drawer
                drawerWidth={drawerWidth}
                open={open}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
            />
            {/* Rest of your component */}
        </Box>
    );
}
