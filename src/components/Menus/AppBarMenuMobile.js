import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import * as React from "react";

export default function AppBarMenuMobile({ anchorEl, isMenuOpen, handleMenuClose, handleSignOut, handleMyAccount }) {
    const mobileMenuId = "primary-search-account-menu-mobile";

    const renderMobileMenu = (
        <Menu
            anchorEl={anchorEl}
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
            open={isMenuOpen}
            onClose={handleMenuClose}
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
}