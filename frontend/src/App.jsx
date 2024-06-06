import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects.jsx'
import NavWindow from './components/NavWindow/NavWindow.jsx'
import ContactMe from './pages/ContactMe.jsx'

import { ThemeProvider } from "./contexts/Theme.jsx";
import Experience from './pages/Experience.jsx'

function App() {
    return (
        <>
            <ThemeProvider>
                <BrowserRouter>
                    <NavWindow />

                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="/portfolio" element={<Projects />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/contact" element={<ContactMe />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default App
