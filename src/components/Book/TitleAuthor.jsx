import React from 'react'

export default function TitleAuthor({ title, subtitle, author }) {
    return (
        <div className="title-author">
            <h1 className="title">{title}</h1>
            {subtitle && (
                <h2 className="subtitle">{subtitle}</h2>
            )}
            <h2 className="author">{author}</h2>
        </div>
    )
}
