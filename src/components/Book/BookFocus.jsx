import React from 'react'
import Cover from './Cover'
import TitleAuthor from './TitleAuthor'

export default function BookFocus({ onClick, imageLinks, title, subtitle, author, showAddBtn, addBook, blurb, editors, language, pageNb, isbn }) {
    return (
        <div className='bookFocus-container'>
            <div className="arrow-back" onClick={onClick}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <Cover
                thumbnail={imageLinks}
            />
            <div className="book-infos">
                <TitleAuthor
                    title={title}
                    subtitle={subtitle}
                    author={author}
                />
                <div className="content">
                    <div className="resume">
                        <h3 className="description">Résumé</h3>
                        <p className="content">{blurb}</p>
                    </div>
                    <div className="more-infos">
                        <div className="langue-pages">
                            <h3 className="other-info">Informations</h3>
                            <p className="language">langue : {language}</p>
                            <p className="pages-nb">{pageNb} pages</p>
                        </div>
                        <div className="editors">
                            <h3 className="editors">Éditeurs</h3>
                            <p className="editors-content">{editors}</p>
                        </div>
                        <div className="identifier">
                            <h3 className="isbn">ISBN</h3>
                            <p className="isbn-nb">{isbn}</p>
                        </div>
                    </div>
                </div>
                {showAddBtn && (
                    <button className="add-book" onClick={addBook}>Ajouter</button>
                )}
            </div>
        </div>
    )
}

