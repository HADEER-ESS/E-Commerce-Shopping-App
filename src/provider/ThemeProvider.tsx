import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { COLOR, ThemeType } from '../constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, useColorScheme } from 'react-native';

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

const MODE_KEY = 'mode'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const defaultMode = Appearance.getColorScheme() || 'light'
    const [mode, setMode] = useState<"light" | "dark">(defaultMode);

    //get the last stored Mode
    useEffect(() => {
        const getStoredMode = async () => {
            try {
                const storedMode = await AsyncStorage.getItem(MODE_KEY)
                if (storedMode === 'light' || storedMode === 'dark') {
                    setMode(storedMode)
                }
            } catch (error) {
                console.error("something went wrong in Theme detection ", error)
            }
        }

        getStoredMode()
    }, [])

    const toggleTheme = async () => {
        setMode(prev => {
            const nextMode = prev === "light" ? "dark" : "light";
            AsyncStorage.setItem("mode", nextMode).catch(error =>
                console.error("Error saving theme mode:", error)
            );
            return nextMode;
        });

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
