'use client';

// React
import * as React from 'react';

// Material UI
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Local
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';


// Component: ThemeRegistry
export default function ThemeRegistry({ children }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
