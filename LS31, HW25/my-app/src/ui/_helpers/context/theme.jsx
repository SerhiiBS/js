import { createContext } from "react";

export const theme = {
    light: {
        background: '#f1f8f8',
        color: '#312f2f',
        borderBottom: '1px Solid #312f2f',
        borderTop: '1px Solid #312f2f',


    },
    dark: {
        color: '#f1f8f8',
        background: '#1a2536',
        borderBottom: '1px Solid #f1f8f8',
        borderTop: '1px Solid #f1f8f8',

    }
};

export const ThemeContext = createContext([]);