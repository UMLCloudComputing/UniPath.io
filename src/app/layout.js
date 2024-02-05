"use client"; // We can 

// React
import * as React from 'react';
import { Authenticator, View } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default theme

// Material UI
import Box from '@mui/material/Box';

// Local
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import ConfigureAmplifyClientSide from '@/components/ConfigureAmplify';

// Metadata
// export const metadata = {
//     title: 'UniPath.io',
//     description: `UniPath.io is an innovative web application designed to revolutionize the way 
//         college students plan and visualize their academic journey. With a focus on user-driven 
//         content and a dynamic visual interface, UniPath.io offers a comprehensive suite of tools 
//         for meticulous degree path planning and progress tracking.`,
// };

/**
 * RootLayout is the main high-level layout component that wraps around other components in this application.
 * It provides them with theme and authentication context.
 *
 * @param {Object} props - The properties passed to this component.
 * @param {ReactNode} props.children - The child components to be rendered inside this layout.
 *
 * @returns {ReactElement} The React Element created by this function.
 */
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body>
                <ThemeRegistry>
                    {/* <ConfigureAmplifyClientSide /> */}
                    <Box component="main" sx={{ p: 1,  }}>
                        <Authenticator.Provider>
                            <View>
                                {children}
                            </View>
                        </Authenticator.Provider>
                    </Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
