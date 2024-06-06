import { createContext, useState } from "react";


const ThemeContext = createContext({
        theme: "light",
        setTheme: () => {}
    }
);

import React from 'react'


function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
  
    // Update the context value when the state changes
    const contextValue = { theme, setTheme };
  
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
export { ThemeContext, ThemeProvider};
