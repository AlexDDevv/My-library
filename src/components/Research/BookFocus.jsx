import React from 'react'
import BookCard from './BookCard'

export default function BookFocus({ blurb, pageNb, editors, title, author, language, imageLinks, onClick }) {
    const showAddBtn = true

    return (
        <div className='bookFocus-container'>
            <div className="arrow-back" onClick={onClick}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="focus-book">
                <div className="focus-infos">
                    <div className="focus-editors">
                        <h3 className="editors">Éditeurs</h3>
                        <p className="editors-content">{editors}</p>
                    </div>
                    <div className="focus-pages">
                        <h3 className="other-info">Informations</h3>
                        <p className="language">langue : {language}</p>
                        <p className="pages-nb">{pageNb} pages</p>
                    </div>
                </div>
                <BookCard
                    thumbnail={imageLinks.smallThumbnail ?? 'URL_PAR_DEFAUT'}
                    title={title}
                    author={author}
                    showAddBtn={showAddBtn}
                />
            </div>
            <div className="focus-content">
                <h3 className="description">Résumé</h3>
                <p className="content">{blurb}</p>
            </div>
        </div>
    )
}
