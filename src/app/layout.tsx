"use client"; // We can

// React
import * as React from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Authenticator, View } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; // Amplify component styles

// Material UI
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// Local
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
// import { darkTheme, lightTheme } from "@/components/theme";
import { ThemeContext, ThemeContextProvider } from "@/contexts/ThemeContext";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

// MainApp is the main high-level layout component that wraps around other components in this application.
const MainApp = ({ children }: { children: any }) => {
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

const cache = createCache({
  key: 'css',
  prepend: true,
});

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// RootLayout is the main high-level layout component that wraps around other components in this application. 
// It provides them with theme and authentication contexts.
export default function RootLayout({ children }: { children: any }) {
  // Amplify.configure(outputs)
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/favicon.png" />
      </head>
      <body

      >
        <div id="root">
          <StyledEngineProvider injectFirst>
            <CacheProvider value={cache}>
              <AppRouterCacheProvider>
                <ConfigureAmplifyClientSide />
                <ThemeContextProvider>

                  <MainApp>
                    {children}
                  </MainApp>

                </ThemeContextProvider>
              </AppRouterCacheProvider>
            </CacheProvider>
          </StyledEngineProvider>
        </div>
      </body>
    </html >
  );
}
