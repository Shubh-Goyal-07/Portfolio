import React from 'react'
import HomeMain from '../components/Home/HomeMain'
import ProjectsMain from '../components/Projects/ProjectsMain'
import ResumeMain from '../components/Resume/ResumeMain'
import AboutMeMain from '../components/AboutMe/AboutMeMain'
import ContactMeMain from '../components/ContactMe/ContactMeMain'

export default function Portfolio() {
    return (
        <div>
            <HomeMain />
            <AboutMeMain />
            <ResumeMain />
            <ProjectsMain />
            <ContactMeMain />
        </div>
    )
}
