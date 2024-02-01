import { DarkMode, DarkModeOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

export default function DarkModeToggle() {
    const [theme, setTheme] = React.useState("light");
    React.useEffect(() => {
        let currentTheme = localStorage.getItem("theme");
        setTheme(currentTheme);
    }, []);

    const handleThemeChange = () => {
        let updatedTheme = theme === "light" ? "dark" : "light";
        setTheme(updatedTheme);
        localStorage.setItem("theme", updatedTheme);
        window.location.reload();
    };

    return (
        <IconButton onClick={handleThemeChange}>
            {theme === "dark" ? (
                <DarkMode color={"inherit"} />
            ) : (
                <DarkModeOutlined color={"inherit"} />
            )}
        </IconButton>
    );
}
