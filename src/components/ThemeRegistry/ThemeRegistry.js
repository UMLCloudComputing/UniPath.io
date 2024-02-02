"use client";

// React
import * as React from "react";

// Material UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Local
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { ThemeContext } from "../../contexts/ThemeContext";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});

// Component: ThemeRegistry
export default function ThemeRegistry({ children }) {
    const { darkMode, setDarkMode } = React.useContext(ThemeContext);

    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
