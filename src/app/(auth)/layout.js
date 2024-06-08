
// React
import React, { Suspense } from 'react';

// Material UI
import Box from '@mui/material/Box';


// Component: Auth Layout
export default function AuthLayout({ children }) {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                p: 3,
            }}
        >
            <Suspense>
                {children}
            </Suspense>
        </Box>
    );
}