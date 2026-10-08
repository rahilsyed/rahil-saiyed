import { createContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextTypes {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}
export const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('data-theme') ?? 'dark');
    useEffect(() => {
        const rootElement = document.documentElement;
        rootElement.setAttribute('data-theme', theme)
        localStorage.setItem('data-theme', theme);
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, setTheme } as ThemeContextTypes}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;