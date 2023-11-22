
// React
import * as React from 'react';

// Material UI
import Box from '@mui/material/Box';

// Local
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';


// Metadata
export const metadata = {
    title: 'UniPath.io',
    description: `UniPath.io is an innovative web application designed to revolutionize the way 
        college students plan and visualize their academic journey. With a focus on user-driven 
        content and a dynamic visual interface, UniPath.io offers a comprehensive suite of tools 
        for meticulous degree path planning and progress tracking.`,
};

// Component: RootLayout
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body>
                <ThemeRegistry>
                    <Box component="main" sx={{  }}>
                        {children}
                    </Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
