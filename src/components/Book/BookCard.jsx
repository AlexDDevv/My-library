import React from 'react'
import Cover from './Cover'
import TitleAuthor from './TitleAuthor'

export default function BookCard({ onClick, onKeyDown, thumbnail, bookName, title, author, removeBtn, remove }) {
    return (
        <>
            <article className='bookCard' onClick={onClick} tabIndex={0} onKeyDown={onKeyDown}>
                <Cover
                    thumbnail={thumbnail}
                    bookName={bookName}
                />
                <TitleAuthor
                    title={title}
                    author={author}
                />
                <div className="btn-container">
                    {removeBtn && (
                        <button className="delete-book" onClick={remove}>
                            Retirer
                        </button>
                    )}
                </div>
            </article>
        </>
    )
}
