import React from 'react'

export default function TitleAuthor({ title, subtitle, author }) {
    return (
        <div className="title-author">
            <h2 className="title">{title}</h2>
            {subtitle && (
                <h3 className="subtitle">{subtitle}</h3>
            )}
            <span className="author">{author}</span>
        </div>
    )
}
