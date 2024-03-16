import React from 'react'
import Cover from './Cover'
import TitleAuthor from './TitleAuthor'

export default function BookFocus({ onClick, imageLinks, title, author, showAddBtn, addBook, blurb, editors, language, pageNb,  }) {
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
                    author={author}
                />
                <div className="focus-infos">
                    <div className="focus-content">
                        <h3 className="description">Résumé</h3>
                        <p className="content">{blurb}</p>
                    </div>
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
                {showAddBtn && (
                    <button className="add-book" onClick={addBook}>Ajouter</button>
                )}
            </div>
        </div>
    )
}

