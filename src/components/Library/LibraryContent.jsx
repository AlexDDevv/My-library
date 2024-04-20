import React, { useEffect, useState } from 'react'
import Carrousel from './Carrousel'
import BookFocus from '../Book/BookFocus'

export default function LibraryContent() {
	const [selectedBook, setSelectedBook] = useState(null)
	const [showBook, setShowBook] = useState(false)
	const [book, setBook] = useState([])

	useEffect(() => {
		const retrieveBook = JSON.parse(localStorage.getItem("books")) || [];
		setBook(retrieveBook)
	}, [])

	const goBack = () => {
		setShowBook(false)
		setSelectedBook(null)
	}
	const goBackWithKey = (e) => {
		if (e.key === "Enter") {
			goBack()
		}
	}

	const removeBookFromLibrary = (bookId, e) => {
        e.stopPropagation()
        const updatedBooks = book.filter(book => book.id !== bookId)
        setBook(updatedBooks)
        localStorage.setItem("books", JSON.stringify(updatedBooks));
		
		let runningAnimation = false
        if (!runningAnimation) {
            runningAnimation = true
            e.target.textContent = "Retiré!"
            e.target.classList.add("active-btn") 
            setTimeout(() => {
                runningAnimation = false
				goBack()
            }, 500)
        }
    }

	return (
		<>
			<main className="library-container">
				{!selectedBook ? (
					<>
						<h1 className="library-title">Ma bibliothèque</h1>
						<section className="library-content">
							<Carrousel
								book={book}
								setBook={setBook}
								showBook={showBook}
								setShowBook={setShowBook}
								setSelectedBook={setSelectedBook}
							/>
						</section>
					</>
				) : (
					<>
						<section className='research-result'>
							<BookFocus
								onClick={goBack}
								onKeyDown={(e) => goBackWithKey(e)}
								imageLinks={selectedBook.volumeInfo.imageLinks.smallThumbnail ?? 'URL_PAR_DEFAUT'}
								title={selectedBook.volumeInfo.title}
								subtitle={selectedBook.volumeInfo.subtitle}
								author={selectedBook.volumeInfo.authors}
								blurb={selectedBook.volumeInfo.description}
								editors={selectedBook.volumeInfo.publisher}
								language={selectedBook.volumeInfo.language}
								pageNb={selectedBook.volumeInfo.pageCount}
								isbn={selectedBook.volumeInfo.industryIdentifiers[0].identifier}
								addOrRemove={(e) => removeBookFromLibrary(selectedBook.id, e)}
								contentBtn={"Retirer"}
							/>
						</section>
					</>
				)}
			</main>
		</>
	)
}
