import React, { useState, useEffect, createContext } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    // Initialize theme state with default values
    const [themeState, setThemeState] = useState({
        darkMode: false, // This can include more theme related states
    });

    // Load theme state from localStorage on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('themeState');
        if (storedTheme) {
            setThemeState(JSON.parse(storedTheme));
        }
    }, []);

    // Save theme state to localStorage on change
    useEffect(() => {
        localStorage.setItem('themeState', JSON.stringify(themeState));
    }, [themeState]);

    // Function to toggle dark mode (you can add more functions to modify other parts of the theme)
    const toggleTheme = () => {
        setThemeState((prevState) => ({
            ...prevState,
            darkMode: !prevState.darkMode,
        }));
    };

    return (
        <ThemeContext.Provider value={{ ...themeState, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContextProvider, ThemeContext };
