import React from 'react'
import { ThemeContext } from "../../contexts/Theme.jsx";
import { RiWhatsappFill, RiMailFill } from 'react-icons/ri';

export default function ContactInfo() {

    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className={`contact-info font-${theme}`}>
            <p>Feel free to get in touch with me.</p>

            <a className={`contact-info-item font-${theme}`} href='mailto:goyal.shubh0711@gmail.com'>
                <RiMailFill className='contact-info-item-logo'/>
                <div className='contact-info-item-text'>
                    <span className='contact-info-item-title'>Email ME AT</span>
                    <span className='contact-info-item-info'>goyal.shubh0711@gmail.com</span>
                </div>
            </a>

            <a className='contact-info-item'>
                <RiWhatsappFill className='contact-info-item-logo'/>
                <div className='contact-info-item-text'>
                    <span className='contact-info-item-title'>WHATSAPP ME</span>
                    <span className='contact-info-item-info'>+91 88897 22887</span>
                </div>
            </a>
        </div>
    )
}
