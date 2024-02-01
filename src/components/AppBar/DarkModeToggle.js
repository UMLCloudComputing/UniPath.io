import {DarkMode, DarkModeOutlined} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

export default function DarkModeToggle() {
    const handleThemeChange = () => {
        let currentTheme = localStorage.getItem("theme");
        if (currentTheme === "light") {
            currentTheme = "dark";
        } else {
            currentTheme = "light";
        }
        localStorage.setItem("theme", currentTheme); //local storage applies on per page
        window.location.reload();
    };

    return (
        <IconButton onClick={handleThemeChange}>
            {localStorage.getItem("theme") === "dark" ? (
                <DarkModeOutlined
                    color={"inherit"}/>
            ) : (
                <DarkMode
                    color={"inherit"}/>
            )}
        </IconButton>
    )
}