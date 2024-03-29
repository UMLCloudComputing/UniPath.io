"use client";

// React
import * as React from "react";

// Material UI
import { alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// Local Components
import DialogComponent from "@/components/Dialogs/LoginDialog";

import DarkModeToggle from "@/components/NavBar/DarkModeToggle";

// Material UI: Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

// Amplify
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Next
import {usePathname, useRouter} from "next/navigation";
import SearchBar from "@/components/Inputs/SearchBar";
import AppBarMenu from "@/components/Menus/AppBarMenu";
import {useState} from "react";
import Image from "next/image";

/**
 * AppBarComponent renders an NavBar with various interactive elements.
 * It includes a drawer, search bar, sign up/log in button, and account settings.
 *
 * @param {Object} props - The properties passed to this component.
 * @param {number} props.drawerWidth - The width of the drawer.
 * @param {boolean} props.open - The state of the drawer (open or closed).
 * @param {Function} props.handleDrawerOpen - The function to handle the opening of the drawer.
 *
 * @returns {ReactElement} The React Element created by this function.
 */
export default function NavBar({
    handleDrawerOpen,
    showDrawerIcon = true,
    showAboutButton = true
}) {
    // React Vars and Hooks
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null)
    const menuOpen = Boolean(anchorEl)
    const router = useRouter();
    const pathname = usePathname()

    //Amplify hooks
    const { authenticated, authStatus, user, signOut } = useAuthenticator(
        (context) => [context.user],
    );

    //click handlers
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        // target: window ? window() : undefined,
    });

    const handleLoginClick = () => {
        router.push(`/login?next=${pathname}`);
    };

    const handleAboutClick = () => {
        router.push("/about");
    };

    const handleMyAccount = () => {
        console.log("Redirect to my account page")
    }

    const handleSignOut = () => {
        router.replace("/signout")
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    // Button redirect click handler


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                elevation={trigger ? 2 : 0}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    transition: (theme) =>
                        theme.transitions.create(["margin", "width"], {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                    bgcolor: "background.paper",
                    color: "text.primary",
                    borderBottom: (theme) =>
                        `1px solid ${theme.palette.divider}`,
                    // backdropFilter: 'blur(12px)', // trying to copy the NavBar blur from the mui.com docs
                }}
            >
                <Toolbar>
                    {/* Left Group */}
                    {showDrawerIcon ?
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{ mr: "0.5em", display: {xs: "none", md: "flex"}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    : <></>
                    }
                    <Image
                        src="/logo.png"
                        alt="UniPath.io Logo"
                        width={160}
                        height={40}
                        style={{marginRight: "10px" }}
                    />
                    <Box sx={{ flexGrow: 1 }} />

                    {/*<SearchBar/>*/} {/*Not used for now*/}



                    <Box sx={{ flexGrow: 1 }} />

                    {/* Right */}

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 0.5fr)",
                        gap: "0.5em"
                    }}>
                        {showAboutButton? (
                            // change this to ref about page once its been written
                            <Button color="inherit" onClick={handleAboutClick}>
                                About
                            </Button>
                        ) : (
                            <></>
                        )}

                        <DarkModeToggle />
                        {
                            /* Logged out UI, sign up button showed */
                            authStatus === "unauthenticated" ? (
                                /* Sign Up Button */
                                <>
                                    <Button variant="outlined" onClick={handleLoginClick}>
                                        Login
                                    </Button>
                                </>
                            ) : authStatus ===
                                "authenticated" /* Logged in UI, with IconButton instead of Sign Up
                        Button */ ? (
                                    <Box>
                                        <IconButton
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls="primary-search-account-menu"
                                            aria-haspopup="true"
                                            onClick={handleMenuOpen}
                                            color="inherit"
                                        >
                                            <AccountCircle />
                                        </IconButton>
                                    </Box>
                                ) : (
                                    <></>
                                )
                        }
                    </Box>
                </Toolbar>
                <AppBarMenu
                    anchorEl={anchorEl}
                    isMenuOpen={menuOpen}
                    handleMenuClose={handleMenuClose}
                    handleSignOut={handleSignOut}
                    handleMyAccount={handleMyAccount}
                />
            </AppBar>

        </Box>
    );
}
