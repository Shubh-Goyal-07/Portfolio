import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavWindow from './components/NavWindow/NavWindow.jsx'
import Portfolio from './pages/Portfolio.jsx'


import { ThemeProvider } from "./contexts/Theme.jsx";

function App() {
    return (
        <>
            <ThemeProvider>
                <BrowserRouter>
                    <NavWindow />

                    <Routes>
                        <Route path="/" element={<Portfolio />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default App
