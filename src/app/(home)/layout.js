"use client";

// React
import React, {useState} from "react";

// Material UI
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

// Local
import AppBar from "@/components/AppBar/AppBar"; // Import AppBar component
import Drawer from "./Drawer"; // Import Drawer component
import BottomNavigation from "./BottomNavigation";

// Global Variables
const drawerWidth = 240;
const drawerWidthClosed = 100;

/**
 * The main layout of the application.
 * It includes an AppBar at the top, a responsive Drawer that opens from the left, the main content area, and a BottomNavigation.
 *
 * @param {Object} props - The properties passed to this component.
 * @param {ReactNode} props.children - The child components to be rendered in the main content area.
 *
 * @returns {ReactElement} The React Element created by this function.
 */
export default function Layout({children}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Using a media query to determine screen size
    const [open, setOpen] = useState(!isMobile);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        console.log("handleDrawerClose");
    };

    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: theme.palette.action.hover,
                minHeight: "100vh",
            }}
        >

            {/* AppBar */}
            <AppBar
                drawerWidth={drawerWidth}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                isLandingPage={false}
            />

            {/* Main */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: {
                        xs: "100%",
                        md: `calc(100% - ${
                            open ? drawerWidth : drawerWidthClosed
                        }px)`,
                    },
                    transition: (theme) =>
                        theme.transitions.create("margin", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                    ...(open && {
                        ml: {
                            xs: 0,
                            md: `${drawerWidth}px`,
                        },
                        transition: (theme) =>
                            theme.transitions.create("margin", {
                                easing: theme.transitions.easing.easeOut,
                                duration:
                                theme.transitions.duration.enteringScreen,
                            }),
                    }),
                }}
            >
                {/* Sidebar Drawer */}
                <Drawer
                    drawerWidth={drawerWidth}
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                    handleDrawerOpen={handleDrawerOpen}
                />

                {/* Children */}
                <Box sx={{mt: 7}}>{children}</Box>

                {/* Bottom Navigation */}
                <BottomNavigation/>
            </Box>
        </Box>
    );
}
