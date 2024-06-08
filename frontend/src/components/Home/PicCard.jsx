import React from 'react'
import img1 from './../../data/img1.jpeg'

import { ThemeContext } from "../../contexts/Theme.jsx";


export default function PicCard() {

    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className='home-pic-section'>
            <div className={`home-pic-1 border-${theme} shadow-${theme}`} />
        </div>
    )
}
