import { DarkMode, DarkModeOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function DarkModeToggle() {
    const { darkMode, toggleTheme } = React.useContext(ThemeContext);

    return (
        <IconButton onClick={toggleTheme}>
            {darkMode ? (
                <DarkMode color={"inherit"} />
            ) : (
                <DarkModeOutlined color={"inherit"} />
            )}
        </IconButton>
    );
}
