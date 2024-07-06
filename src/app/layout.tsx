"use client"; // We can

// React
import * as React from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Authenticator, View } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; // Amplify component styles

// Material UI
import { ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// Local
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
import { darkTheme, lightTheme } from "@/components/theme";
import { ThemeContext, ThemeContextProvider } from "@/contexts/ThemeContext";
import { DragDropContext } from "@hello-pangea/dnd";
import { Amplify } from "aws-amplify";

import outputs from "../../amplify_outputs.json";

// MainApp is the main high-level layout component that wraps around other components in this application.
const MainApp = ({ children }) => {
    const { darkMode } = React.useContext(ThemeContext);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Authenticator.Provider>
                <View>
                    <CssBaseline />
                    <Box
                    >
                        {children}
                    </Box>
                </View>
            </Authenticator.Provider>
        </ThemeProvider>
    );
};

// RootLayout is the main high-level layout component that wraps around other components in this application. 
// It provides them with theme and authentication contexts.
export default function RootLayout({ children }) {
    Amplify.configure(outputs)
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body

            >
                <AppRouterCacheProvider>
                    <ConfigureAmplifyClientSide />
                    <ThemeContextProvider>

                        <MainApp>
                            {children}
                        </MainApp>

                    </ThemeContextProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
