import React from 'react'

export default function BookCard({ thumbnail, title, author }) {
  return (
        <>
            <article className='book'>
                <div className="book-cover">
                    <img 
                        src={thumbnail} 
                        alt="Vignette de présentation du livre" 
                        className='thumbnail-book'
                    />
                </div>
                <div className="title-author">
                    <h3 className="title">{title}</h3>
                    <span className="author">{author}</span>
                </div>
            </article>
        </>
    )
}
