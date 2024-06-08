import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


export default function HomeDescArea() {
    return (
        <div className={`home-text-area`}>
            <div style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                Life is simple{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                        loop={false}
                        cursor
                        cursorStyle='|'
                        typeSpeed={200}
                        deleteSpee={10}
                        delaySpeed={1000}
                    />
                </span>
            </div>
        </div>
    )   
}
