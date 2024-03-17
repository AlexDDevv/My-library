import React from 'react'

export default function Cover({ thumbnail, bookName }) {
    return (
        <div className="book-cover">
            <img
                src={thumbnail}
                alt={"Vignette de présentation du livre " + bookName}
                className='thumbnail-book'
            />
        </div>
    )
}
