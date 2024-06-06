import React from 'react'
import './NavWindow.css'

import { RiHome3Fill, RiBox2Line, RiArtboardFill, RiWechatLine } from "react-icons/ri";
import NavItem from './NavItem.jsx';

import { ThemeContext } from "../../contexts/Theme.jsx";
import ThemeButton from './ThemeButton.jsx';
import SocialBar from './SocialBar.jsx';
import TitleBar from './TitleBar.jsx';

export default function NavWindow() {

    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className='navwindow'>
            <TitleBar />
            
            <nav className='navbar'>
                <NavItem icon={<RiHome3Fill />} text='Home' link='/' />
                <NavItem icon={<RiBox2Line />} text='Projects' link='/projects' />
                <NavItem icon={<RiArtboardFill />} text='Experience' link='/experience' />
                <NavItem icon={<RiWechatLine />} text='Contact' link='/contact' />
            </nav>

            <ThemeButton />
            <SocialBar />
        </div>
    )
}
