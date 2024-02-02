import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                setDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
