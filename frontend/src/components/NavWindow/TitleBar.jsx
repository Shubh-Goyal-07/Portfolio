import React from 'react'
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './NavWindow.css'

import { ThemeContext } from "../../contexts/Theme.jsx";

const titlepathmap = {
    '/': 'Home',
    '/projects': 'Projects',
    '/experience': 'Experience',
    '/contact': 'Contact'
}

const descpathmap = {
    '/': 'Portfolio!',
    '/projects': 'Lets see',
    '/experience': 'What I have Done',
    '/contact': 'Contact me!'
}

export default function TitleBar() {

    const { theme, setTheme } = useContext(ThemeContext);

    const location = useLocation();

    return (
        <>
            <div className={`titlebar titlebar-title font-${theme}`}>
                {titlepathmap[location.pathname]}
            </div>
            <div className={`titlebar titlebar-back font-${theme}`}>
                {descpathmap[location.pathname]}
            </div>
        </>
    )
}
