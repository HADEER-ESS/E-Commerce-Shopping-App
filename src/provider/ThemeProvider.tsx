import React, { createContext, ReactNode, useContext, useState } from 'react'
import { COLOR, ThemeType } from '../constant/Colors';

type ThemeContextType = {
    mode: 'light' | 'dark';
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    theme: COLOR.light,
    toggleTheme: () => { },
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext value={{ theme: COLOR[mode], mode, toggleTheme }}>
            {children}
        </ThemeContext>
    )
}

export default ThemeProvider

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
