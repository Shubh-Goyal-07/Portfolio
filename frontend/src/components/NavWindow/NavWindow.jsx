import React, { useLayoutEffect } from 'react'
import './NavWindow.css'

import { RiHome3Fill, RiBox2Line, RiWechatLine, RiAccountPinBoxFill, RiFileMarkedFill } from "react-icons/ri";
import NavItem from './NavItem.jsx';

import bg from './../../data/bg.jpg';

import { ThemeContext } from "../../contexts/Theme.jsx";
import ThemeButton from './ThemeButton.jsx';
import SocialBar from './SocialBar.jsx';
import TitleBar from './TitleBar.jsx';

export default function NavWindow() {

    const { theme, setTheme } = React.useContext(ThemeContext);

    useLayoutEffect(() => {
        document.body.style.backgroundImage = `url(${bg})`;
   });

    return (
        <div className='navwindow'>
            {/* <TitleBar /> */}
            
            <nav className='navbar'>
                <NavItem icon={<RiHome3Fill />} text='home' link='/' />
                <NavItem icon={<RiAccountPinBoxFill />} text='about me' link='/about' />
                <NavItem icon={<RiFileMarkedFill />} text='resume' link='/experience' />
                <NavItem icon={<RiBox2Line />} text='projects' link='/projects' />
                <NavItem icon={<RiWechatLine />} text='contact me' link='/contact' />
            </nav>

            <ThemeButton />
            <SocialBar />
        </div>
    )
}
