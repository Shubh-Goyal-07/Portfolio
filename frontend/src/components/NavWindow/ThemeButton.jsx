import React from 'react'
import { useState, useContext } from 'react'
import './NavWindow.css'

import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { ThemeContext } from "../../contexts/Theme.jsx";

export default function ThemeButton() {

    const { theme, setTheme } = useContext(ThemeContext);
    const [isDarkMode, setDarkMode] = useState(theme === 'dark');

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        setTheme(checked ? "dark" : "light");
        console.log('Theme:', checked ? 'dark' : 'light');
    };


    return (
        <DarkModeSwitch
            className={`theme-button nav-item bg-${theme}`}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
            moonColor='#f9f8eb'
            sunColor='#2b1e15'
        />
    )
}
