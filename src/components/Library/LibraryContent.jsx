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
								imageLinks={selectedBook.volumeInfo.imageLinks.smallThumbnail ?? 'URL_PAR_DEFAUT'}
								title={selectedBook.volumeInfo.title}
								author={selectedBook.volumeInfo.authors}
								showAddBtn={false}
								blurb={selectedBook.volumeInfo.description}
								editors={selectedBook.volumeInfo.publisher}
								language={selectedBook.volumeInfo.language}
								pageNb={selectedBook.volumeInfo.pageCount}
							/>
						</section>
					</>
				)}
			</main>
		</>
	)
}
