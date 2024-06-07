import React from 'react'

import { ThemeContext } from "../../contexts/Theme.jsx";

export default function NavItem(props) {

    let icon = props.icon
    let text = props.text
    let link = props.link

    const { theme, setTheme } = React.useContext(ThemeContext);

    const handleClick = (text) => {
        let classname = `${text.split(' ').join('-')}-main`
        const elem = document.getElementsByClassName(classname)[0]

        elem.scrollIntoView({ behavior: "smooth"})
    }

    return (
        <div className={`nav-item bg-anti-${theme}`} onClick={() => handleClick(text)}>
            {icon}
            <div className="nav-text">
                {text}
            </div>
        </div>
    )
}
