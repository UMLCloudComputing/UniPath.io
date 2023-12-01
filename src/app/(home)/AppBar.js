"use client";

// React
import * as React from 'react';

// Material UI
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from  '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

// Local Components
import DialogComponent from './Dialog';

// Material UI: Icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

// Amplify
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);


// Component: AppBarComponent
export default function AppBarComponent({ drawerWidth, open, handleDrawerOpen }) {

    // React Vars and Hooks
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [openDialog, setOpenDialog] = React.useState(false);

    //Amplify hooks
    const { authenticated, authStatus, user, signOut } = useAuthenticator((context) => [context.user]);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
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

    // Button redirect click handler

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

  

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" elevation={0} sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                transition: (theme) => theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                bgcolor: 'background.paper',
                color: 'text.primary',
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}>
                <Toolbar>
                    
                    {/* Left Group */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="/favicon.png" alt="UniPath.io Logo" style={{ height: '50px', marginRight: '10px'}} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        UniPath.io
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
    
                    {/* Center */}
                    <Box sx={{
                        position: 'relative',
                        borderRadius: theme => theme.shape.borderRadius,
                        backgroundColor: theme => alpha(theme.palette.common.white, 0.15),
                        '&:hover': { backgroundColor: theme => alpha(theme.palette.common.white, 0.25) },
                        marginRight: theme => theme.spacing(2),
                        marginLeft: 0,
                        width: '100%',
                        [theme.breakpoints.up('sm')]: { width: 400 },
                        [theme.breakpoints.down('sm')]: { width: 200 }
                    }}>
                        <Box sx={{
                            padding: theme => theme.spacing(0, 2),
                            height: '100%',
                            position: 'absolute',
                            pointerEvents: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            sx={{
                                color: 'inherit',
                                '& .MuiInputBase-input': {
                                    padding: theme => theme.spacing(1, 1, 1, 0),
                                    paddingLeft: theme => `calc(1em + ${theme.spacing(4)})`,
                                    transition: theme => theme.transitions.create('width'),
                                    width: '100%',
                                    [theme.breakpoints.up('md')]: { width: '20ch' },
                                }
                            }}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
    
                    {/* Right */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        
                        {
                            authStatus === "unauthenticated" 
                            ? 
                            <Button /*onClick={() => redirect("/signup")*/ variant = "outlined">Sign Up</Button>
                            : 
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
                        }
                        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton> */}
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
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
    
}
