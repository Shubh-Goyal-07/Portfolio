import React from 'react'
import { useContext } from 'react'
import { RiGithubFill, RiInstagramLine, RiLinkedinBoxFill } from 'react-icons/ri'

import { ThemeContext } from '../../contexts/Theme.jsx'

export default function SocialBar() {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={`socialbar font-${theme}`}>
            <div className={`vl-${theme}`} style={{height:'200px'}}></div>

            <a href='https://www.linkedin.com/in/shubh-goyal-78a6a6222' target='_blank' rel='noreferrer' className={`font-${theme}`}>
                <RiLinkedinBoxFill />
            </a>
            <a href='https://github.com/Shubh-Goyal-07' target='_blank' rel='noreferrer' className={`font-${theme}`}>
                <RiGithubFill />
            </a>
            <a href='https://www.instagram.com/shubhh_goyal/' target='_blank' rel='noreferrer' className={`font-${theme}`}>
                <RiInstagramLine />
            </a>

            <div className={`vl-${theme}`} style={{height:'50px'}}></div>
        </div>
    )
}
