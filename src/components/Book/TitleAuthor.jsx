import React from 'react'

export default function TitleAuthor({ title, subtitle, author }) {
    const maxAuthor = 2

    return (
        <div className="title-author">
            <h1 className="title">{title}</h1>
            {subtitle && (
                <h2 className="subtitle">{subtitle}</h2>
            )}
            {author && (
                <div className={`author-container ${author.length > maxAuthor ? "multiple-authors" : ""}`}>
                    {author.map((author, i) => (
                        <h2 key={i} className="author">{author}</h2>
                    ))}
                </div>
            )}
        </div>
    )
}
