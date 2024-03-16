import React from 'react'

export default function TitleAuthor({ title, author }) {
    return (
        <div className="title-author">
            <h2 className="title">{title}</h2>
            <span className="author">{author}</span>
        </div>
    )
}
