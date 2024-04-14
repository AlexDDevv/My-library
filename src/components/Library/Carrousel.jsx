import React, { useState, useEffect } from 'react'
import BookCard from '../Book/BookCard'
import BtnCarrousel from './BtnCarrousel'
import datas from "../../data/data.json"

export default function Carrousel({ book, setBook, showBook, setShowBook, setSelectedBook }) {
    const [index, setIndex] = useState(0)
    const [nbBooksToShow, setNbBooksToShow] = useState(5);

    useEffect(() => {
        function handleResize() {
            const breakpoints = datas.breakPoints.sort((a, b) => b.maxWidth - a.maxWidth);
            const { numBooks } = breakpoints.find(bp => window.innerWidth > bp.maxWidth) || breakpoints[breakpoints.length - 1];
            setNbBooksToShow(numBooks);
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            <div className="view-books">
                {[...book.slice(index), ...book.slice(0, index)].slice(0, nbBooksToShow).map((book) => (
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
            </div>
            {book.length > nbBooksToShow && (
                <div className="change-books">
                    {
                        datas.btnCarrousel.map((item, i) => (
                            <BtnCarrousel
                                key={i}
                                side={item.className}
                                onClick={item.className === "carrousel-btn previous" ? prevBook : nextBook}
                                icon={item.icon}
                                span={item.span}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    )
}
