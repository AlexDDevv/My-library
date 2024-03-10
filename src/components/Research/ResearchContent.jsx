import React from 'react'
import { useState } from 'react'
import apiKey from '../../config'
import BookCard from './BookCard'
import Pagination from './Pagination'
import BookFocus from './BookFocus'

export default function ResearchContent() {
	const [search, setSearch] = useState("")
	const [bookData, setData] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [booksPerPage, setBooksPerPage] = useState(5)
	const [selectedBook, setSelectedBook] = useState(null)
	const [showBook, setShowBook] = useState(false)

	const searchBook = () => {
		fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`)
			.then(res => res.json())
			.then(data => setData(data.items));
	}

	const handleKey = (e) => {
		if (e.key === "Enter") {
			searchBook()
		}
	}
	const handleClick = () => {
		searchBook()
	}
	const clearInput = () => {
		setSearch("")
	}

	const filteredBooks = [...bookData].filter(book => book.accessInfo.viewability !== "NO_PAGES").sort((a, b) => {
		const dateA = new Date(a.volumeInfo.publishedDate)
		const dateB = new Date(b.volumeInfo.publishedDate)

		return dateA - dateB
	})

	const lastBookIndex = currentPage * booksPerPage
	const firstBookIndex = lastBookIndex - booksPerPage
	const currentBooks = filteredBooks.slice(firstBookIndex, lastBookIndex)

	const renderBookFocus = (book) => {
		setSelectedBook(book)
		setShowBook(!showBook)
	}

	const goBack = () => {
		setShowBook(false)
		setSelectedBook(null)
	}

	return (
		<>
			<main className="research-content">
				{!selectedBook ? (
					<section className="research-section">
						<div className="find-book">
							<h1 className="title-search">Trouves un livre</h1>
							<div className="search-bar">
								<div className="input">
									<input
										type="text"
										placeholder="Entres le nom d'un livre"
										id="searchBar"
										value={search}
										onChange={e => setSearch(e.target.value)}
										onKeyDown={handleKey}
									/>
									{search && (
										<i onClick={clearInput} className="fa-solid fa-xmark"></i>
									)}
								</div>
								<button className='search-btn' onClick={handleClick}>
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
							</div>
						</div>
						<div className="books-container">
							{currentBooks.map(book => {
								return (
									<BookCard
										key={book.id}
										thumbnail={book.volumeInfo.imageLinks?.smallThumbnail ?? 'URL_PAR_DEFAUT'}
										title={book.volumeInfo.title}
										author={book.volumeInfo.authors}
										onClick={() => renderBookFocus(book)}
									/>
								)
							})}
						</div>

						<Pagination
							totalBooks={filteredBooks.length}
							booksPerPage={booksPerPage}
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
						/>
					</section>
				) : (
					<>
						<section className="research-result">
							<BookFocus
								blurb={selectedBook.volumeInfo.description}
								pageNb={selectedBook.volumeInfo.pageCount}
								editors={selectedBook.volumeInfo.publisher}
								imageLinks={selectedBook.volumeInfo.imageLinks}
								title={selectedBook.volumeInfo.title}
								author={selectedBook.volumeInfo.authors}
								language={selectedBook.volumeInfo.language}
								onClick={goBack}
							/>
						</section>
					</>
				)}
			</main>
		</>
	)
}
