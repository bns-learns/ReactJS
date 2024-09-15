import { createContext, useContext } from "react";

// modes designed for toggling themes
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

// provider also generated in the same file, no need for extra clutter.
export const ThemeProvider = ThemeContext.Provider;

// this will reduce the usage of a hook and variable i.e. useContext & ThemeContext
// to just useTheme, which is a custom hook.
// So, useTheme() will directly give access to the object within ThemeContext variable i.e. themeMode, darkTheme, LightTheme, etc.
export default function useTheme() {
    return useContext(ThemeContext);
}