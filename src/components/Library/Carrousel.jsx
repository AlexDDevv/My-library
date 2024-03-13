import React, { useState } from 'react'
import BookCard from '../Research/BookCard'

export default function Carrousel({ book, setBook, showBook, setShowBook, setSelectedBook }) {
    const [index, setIndex] = useState(0)

    const renderBookFocus = (book) => {
        setSelectedBook(book)
        setShowBook(!showBook)
    }

    const nextBook = () => {
        setIndex((prevIndex) => (prevIndex + 1) % book.length);
    };

    const prevBook = () => {
        setIndex((prevIndex) => (prevIndex - 1 + book.length) % book.length);
    };

    const removeBookFromLibrary = (bookId, e) => {
        e.stopPropagation()
        const updatedBooks = book.filter(book => book.id !== bookId)
        setBook(updatedBooks)
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    return (
        <div className="books-container">
            {[...book.slice(index), ...book.slice(0, index)].slice(0, 5).map((book) => (
                <BookCard
                    key={book.id}
                    thumbnail={book.volumeInfo.imageLinks?.smallThumbnail ?? 'URL_PAR_DEFAUT'}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    onClick={() => renderBookFocus(book)}
                    removeBtn={true}
                    remove={(e) => removeBookFromLibrary(book.id, e)}
                />
            ))}
            {book.length > 5 && (
                <>
                    <button className="carrousel-btn previous" onClick={prevBook}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="carrousel-btn next" onClick={nextBook}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </>
            )}
        </div>
    )
}
