import React from 'react';
import './Toggle.css';

export function Toggle({ 
    children
}) {
    return <button
        className='toggle'
    >
        {children}
    </button>
}