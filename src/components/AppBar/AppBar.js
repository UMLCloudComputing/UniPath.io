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

import DarkModeToggle from "@/components/AppBar/DarkModeToggle";

// Material UI: Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

// Amplify
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Next
import { useRouter } from "next/navigation";

/**
 * AppBarComponent renders an AppBar with various interactive elements.
 * It includes a drawer, search bar, sign up/log in button, and account settings.
 *
 * @param {Object} props - The properties passed to this component.
 * @param {number} props.drawerWidth - The width of the drawer.
 * @param {boolean} props.open - The state of the drawer (open or closed).
 * @param {Function} props.handleDrawerOpen - The function to handle the opening of the drawer.
 *
 * @returns {ReactElement} The React Element created by this function.
 */
export default function AppBarComponent({
    drawerWidth,
    open,
    handleDrawerOpen,
    isLandingPage,
}) {
    // React Vars and Hooks
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const router = useRouter();

    //Amplify hooks
    const { authenticated, authStatus, user, signOut } = useAuthenticator(
        (context) => [context.user],
    );
    const [openDialog, setOpenDialog] = React.useState(false);

    //click handlers
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        // target: window ? window() : undefined,
    });

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSignOut = () => {
        signOut();
        handleMenuClose();
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };
    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleLoginClick = () => {
        router.replace("/login");
    };

    const handleAboutClick = () => {
        router.replace("/about");
    };

    // Button redirect click handler

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleMobileMenuClose}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={signOut}>Sign out</MenuItem>
                    <AccountCircle />
                </IconButton>
                <p>My Account</p>
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>
                <IconButton
                    size="large"
                    aria-label="add another user icon button"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <PersonAddAltRoundedIcon />
                </IconButton>
                <p>Add Account</p>
            </MenuItem>
        </Menu>
    );

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
                    // backdropFilter: 'blur(12px)', // trying to copy the AppBar blur from the mui.com docs
                }}
            >
                <Toolbar>
                    {/* Left Group */}
                    {!isLandingPage ? <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    : <></>
                }
                    <img
                        src="/favicon.png"
                        alt="UniPath.io Logo"
                        style={{ height: "50px", marginRight: "10px" }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        UniPath.io
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Center */}

                    {!isLandingPage ? (
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: (theme) =>
                                    theme.shape.borderRadius,
                                backgroundColor: (theme) =>
                                    alpha(theme.palette.common.white, 0.15),
                                "&:hover": {
                                    backgroundColor: (theme) =>
                                        alpha(theme.palette.common.white, 0.25),
                                },
                                marginRight: (theme) => theme.spacing(2),
                                marginLeft: 0,
                                width: "100%",
                                [theme.breakpoints.up("sm")]: { width: 400 },
                                [theme.breakpoints.down("sm")]: { width: 200 },
                            }}
                        >
                            <Box
                                sx={{
                                    padding: (theme) => theme.spacing(0, 2),
                                    height: "100%",
                                    position: "absolute",
                                    pointerEvents: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <SearchIcon />
                            </Box>
                            <InputBase
                                sx={{
                                    color: "inherit",
                                    "& .MuiInputBase-input": {
                                        padding: (theme) =>
                                            theme.spacing(1, 1, 1, 0),
                                        paddingLeft: (theme) =>
                                            `calc(1em + ${theme.spacing(4)})`,
                                        transition: (theme) =>
                                            theme.transitions.create("width"),
                                        width: "100%",
                                        [theme.breakpoints.up("md")]: {
                                            width: "20ch",
                                        },
                                    },
                                }}
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Box>
                    ) : (
                        <></>
                    )}

                    <Box sx={{ flexGrow: 1 }} />

                    {/* Right */}

                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        {isLandingPage ? (
                            // change this to ref about page once its been written
                            <Button color="inherit" onClick={handleAboutClick} href={"/about"}>
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
                                            size="large"
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
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

                    {/* TODO */}
                    {/* Mobile configuration for the Sign Up/Account Settings*/}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        {
                            /* Sign Up Button */
                            authStatus === "unauthenticated" &&
                                authStatus != "configuring" ? (
                                <>
                                    <PersonAddAltRoundedIcon
                                        onClick={handleDialogOpen}
                                    />
                                    {/* Improve this to launch it's own page instead of a portal since the portal has sizing issues*/}
                                    <DialogComponent
                                        open={openDialog}
                                        handleClose={handleDialogClose}
                                    />
                                </>
                            ) : (
                                <></>
                            )
                        }
                        {authStatus === "authenticated" ? (
                            /* Logged in UI, with IconButton instead of Sign Up Button */
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        ) : (
                            <></>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
