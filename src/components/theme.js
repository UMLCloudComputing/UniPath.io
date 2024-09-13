import { createTheme } from '@mui/material/styles';
import { createRoot } from 'react-dom';

const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// Light theme
export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
    components: {
        MuiPopover: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiPopper: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiDialog: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiModal: {
            defaultProps: {
                container: rootElement,
            },
        },
    },
});

// Dark theme
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
    components: {
        MuiPopover: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiPopper: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiDialog: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiModal: {
            defaultProps: {
                container: rootElement,
            },
        },
    },
});