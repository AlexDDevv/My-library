import React, { useState } from 'react'
import BookCard from '../Book/BookCard'

export default function Carrousel({ book, setBook, showBook, setShowBook, setSelectedBook }) {
    const [index, setIndex] = useState(0)

    const renderBookFocus = (book) => {
        setSelectedBook(book)
        setShowBook(!showBook)
    }
    const renderBookFocusKey = (e, book) => {
		if (e.key === "Enter") {
			renderBookFocus(book)
		}
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
                    onClick={() => renderBookFocus(book)}
					onKeyDown={(e) => renderBookFocusKey(e, book)}
                    thumbnail={book.volumeInfo.imageLinks?.smallThumbnail ?? 'URL_PAR_DEFAUT'}
                    bookName={book.volumeInfo.title}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    removeBtn={true}
                    remove={(e) => removeBookFromLibrary(book.id, e)}

                />
            ))}
            {book.length > 5 && (
                <>
                    <button className="carrousel-btn previous" onClick={prevBook}>
                        <i className="fa-solid fa-chevron-left"></i>
                        <span className="sr-only">Livres précédents</span>
                    </button>
                    <button className="carrousel-btn next" onClick={nextBook}>
                        <i className="fa-solid fa-chevron-right"></i>
                        <span className="sr-only">Livres suivants</span>
                    </button>
                </>
            )}
        </div>
    )
}
