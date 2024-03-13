import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import bannerImg from "../../assets/images/banner5.webp"
import Carrousel from './Carrousel'
import BookFocus from '../Research/BookFocus'

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
						<Banner
							banner={bannerImg}
							location={"library-banner"}
						/>
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
								blurb={selectedBook.volumeInfo.description}
								pageNb={selectedBook.volumeInfo.pageCount}
								editors={selectedBook.volumeInfo.publisher}
								imageLinks={selectedBook.volumeInfo.imageLinks}
								title={selectedBook.volumeInfo.title}
								author={selectedBook.volumeInfo.authors}
								language={selectedBook.volumeInfo.language}
								onClick={goBack}
								showAddBtn={false}
							/>
						</section>
					</>
				)}
			</main>
		</>
	)
}
