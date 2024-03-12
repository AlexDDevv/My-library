import React from 'react'

export default function BookCard({ thumbnail, title, author, onClick, showAddBtn, addBook, removeBtn, remove }) {
    return (
        <>
            <article className='book' onClick={onClick}>
                <div className="book-cover">
                    <img
                        src={thumbnail}
                        alt="Vignette de présentation du livre"
                        className='thumbnail-book'
                    />
                </div>
                <div className="title-author">
                    <h2 className="title">{title}</h2>
                    <span className="author">{author}</span>
                    {showAddBtn && (
                        <button className="add-book" onClick={addBook}>Ajouter</button>
                    )}
                </div>
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
