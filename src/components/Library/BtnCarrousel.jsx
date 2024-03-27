import React from 'react'

export default function BtnCarrousel({ side, onClick, icon, span }) {
    return (
        <button className={side} onClick={onClick}>
            <i className={icon}></i>
            <span className="sr-only">{span}</span>
        </button>
    )
}
