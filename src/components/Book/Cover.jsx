import React from 'react'

export default function Cover({ thumbnail }) {
    return (
        <div className="book-cover">
            <img
                src={thumbnail}
                alt="Vignette de présentation du livre"
                className='thumbnail-book'
            />
        </div>
    )
}
