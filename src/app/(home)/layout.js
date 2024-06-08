"use client";

// React
import React, { useState } from "react";

// Material UI
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

// Local
import NavBar from "@/components/NavBar/NavBar"; // Import NavBar component
import Drawer from "../../components/Drawers/Drawer"; // Import Drawer component
import BottomNavigation from "../../components/Layouts/BottomNavigation";

// Global Variables
const drawerWidth = 240;
const drawerWidthClosed = 100;

/**
 * The main layout of the application.
 * It includes an NavBar at the top, a responsive Drawer that opens from the left, the main content area, and a BottomNavigation.
 *
 * @param {Object} props - The properties passed to this component.
 * @param {ReactNode} props.children - The child components to be rendered in the main content area.
 *
 * @returns {ReactElement} The React Element created by this function.
 */
export default function Layout({ children }) {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

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
                overflow: "auto !important"
            }}
        >

            {/* NavBar */}
            <NavBar
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
                    p: 2,
                    width: {
                        xs: "100%",
                        md: `calc(100% - ${open ? drawerWidth : drawerWidthClosed
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
                    handleDrawerOpen={handleDrawerOpen} s
                />

                {/* Children */}

                <Box sx={{ mt: "3.5em", mb: "3em", height: "94%", width: "100%" }}>{children}</Box>

            </Box>
            <BottomNavigation />
        </Box>
    );
}
