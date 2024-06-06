import React from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from "../../contexts/Theme.jsx";

export default function NavItem(props) {

    let icon = props.icon
    let text = props.text
    let link = props.link

    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <Link to={link} className={`nav-item bg-anti-${theme}`}>
            {icon}
            <div className="nav-text">
                {text}
            </div>
        </Link>
    )
}
