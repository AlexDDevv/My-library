import React, { useEffect, useState } from 'react'
import Carrousel from './Carrousel'
import BookFocus from '../Book/BookFocus'

export default function LibraryContent({ isBookSelected, setIsBookSelected }) {
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
		setIsBookSelected(!isBookSelected)
	}
	const goBackWithKey = (e) => {
		if (e.key === "Enter") {
			goBack()
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
								isBookSelected={isBookSelected}
								setIsBookSelected={setIsBookSelected}
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
								showAddBtn={false}
								blurb={selectedBook.volumeInfo.description}
								editors={selectedBook.volumeInfo.publisher}
								language={selectedBook.volumeInfo.language}
								pageNb={selectedBook.volumeInfo.pageCount}
								isbn={selectedBook.volumeInfo.industryIdentifiers[0].identifier}
							/>
						</section>
					</>
				)}
			</main>
		</>
	)
}
