import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export default function AppBarMenu ({anchorEl, isMenuOpen, handleMenuClose, handleSignOut, handleMyAccount}) {
    const menuId = "primary-search-account-menu";

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMyAccount}>My account</MenuItem>
            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
        </Menu>
    );
}