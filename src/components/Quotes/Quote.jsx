import React from 'react'

export default function Quote({ quote, author }) {
    return (
        <article className="title-quote">
            <h1 className="title">
                <q className='quote'>{quote}</q>
            </h1>
            <span className="autor">{author}</span>
        </article>
    )
}
