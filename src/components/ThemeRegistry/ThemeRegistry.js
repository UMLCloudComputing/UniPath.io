"use client";

// React
import * as React from "react";

// Material UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Local
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";

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

let currentTheme = localStorage.getItem("theme");

// Component: ThemeRegistry
export default function ThemeRegistry({ children }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider
                theme={currentTheme === "light" ? lightTheme : darkTheme}
            >
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
