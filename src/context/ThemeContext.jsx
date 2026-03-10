import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // Check localStorage first, default to '3d'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        return savedTheme || '3d';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === '3d' ? 'light' : '3d'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
