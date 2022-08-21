
import React from 'react'
import './button.css'

const colors = ['green', 'yellow', 'red']

export default function Button({ children, color = 'green', onClick }) {

    const adjustColor = colors.includes(color) ? color: 'green';

    return (
        <div className={`button-container ${adjustColor}`} onClick={onClick}>
            <button>{children}</button>
        </div>
    )
}
