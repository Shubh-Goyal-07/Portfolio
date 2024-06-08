import React from 'react'
import './Home.css'

import { ThemeContext } from "../../contexts/Theme.jsx";
import PicCard from './PicCard.jsx';
import HomeDescArea from './HomeDescArea.jsx';


export default function HomeMain() {

    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className={`home-main`}>
            <PicCard />
            <HomeDescArea />
        </div>
    )
}
