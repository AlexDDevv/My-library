import React from 'react'
import Cover from './Cover'
import TitleAuthor from './TitleAuthor'

export default function BookCard({ thumbnail, title, author, onClick, removeBtn, remove, onKeyDown }) {
    return (
        <>
            <article className='bookCard' onClick={onClick} tabIndex={0} onKeyDown={onKeyDown}>
                <Cover
                    thumbnail={thumbnail}
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
