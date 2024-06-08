import React from 'react'
import './ContactMe.css'
import ContactForm from './ContactForm'

import { ThemeContext } from "../../contexts/Theme.jsx";
import ContactInfo from './ContactInfo.jsx';


export default function ContactMeMain() {

    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className={`contact-me-main bg-dark-${theme}`}>
            <ContactInfo />
            <ContactForm />
        </div>
    )
}
