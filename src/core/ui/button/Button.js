import React from 'react';
import './Button.css';

export function Button({
    children,
    onClick,
    type='button'
}) {
    return <button
        className='button'
        onClick={onClick}
        type={type}
    >
        <span className='button-content'>
            {children}
        </span>
    </button>
}