import React from 'react'
import Cover from './Cover'
import TitleAuthor from './TitleAuthor'

export default function BookCard({ thumbnail, title, author, onClick, removeBtn, remove }) {
    return (
        <>
            <article className='bookCard' onClick={onClick}>
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
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    )}
                </div>
            </article>
        </>
    )
}
