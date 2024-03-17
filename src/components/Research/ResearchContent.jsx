import React from 'react'
import { useState } from 'react'
import apiKey from '../../config'
import BookCard from '../Book/BookCard'
import Pagination from './Pagination'
import BookFocus from '../Book/BookFocus'

export default function ResearchContent() {
	const [search, setSearch] = useState("")
	const [searchError, setSearchError] = useState(false)
	const [bookData, setData] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [booksPerPage, setBooksPerPage] = useState(5)
	const [selectedBook, setSelectedBook] = useState(null)
	const [showBook, setShowBook] = useState(false)

	const searchBook = () => {
		if (search.trim() === "") {
			setSearchError(true)
			return;
		}

		fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`)
			.then(res => res.json())
			.then(data => setData(data.items));

		setSearchError(false)
	}

	const handleClick = (e) => {
		e.preventDefault()
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
	const renderBookFocusKey = (e, book) => {
		if (e.key === "Enter") {
			renderBookFocus(book)
		}
	}

	const goBack = () => {
		setShowBook(false)
		setSelectedBook(null)
	}
	const goBackWithKey = (e) => {
		if (e.key === "Enter") {
			goBack()
		}
	}

	const addBookToLibrary = () => {
		const existingBooks = JSON.parse(localStorage.getItem("books")) || [];
		const newBooks = [...existingBooks, selectedBook];
		localStorage.setItem("books", JSON.stringify(newBooks));
    }

	return (
		<>
			<main className="research-content">
				{!selectedBook ? (
					<section className="research-section">
						<div className="find-book">
							<h1 className="title-search">Trouves un livre</h1>
							<form className="search-bar" onSubmit={(e) => handleClick(e)}>
								<div className="input">
									<label className='sr-only' htmlFor="searchBar">Nom du livre recherché</label>
									<input
										type="text"
										placeholder="Entres le nom d'un livre"
										id="searchBar"
										value={search}
										onChange={e => setSearch(e.target.value)}
									/>
									{search && (
										<i onClick={clearInput} className="fa-solid fa-xmark"></i>
									)}
								</div>
								<button className='search-btn' type='submit'>
									<i className="fa-solid fa-magnifying-glass"></i>
									<span className="sr-only">Rechercher un livre</span>
								</button>
							</form>
							{searchError && (
								<span className='error-search'>Entres le nom d'un livre</span>
							)}
						</div>
						<div className="books-container">
							{currentBooks.map(book => {
								return (
									<BookCard
										key={book.id}
										onClick={() => renderBookFocus(book)}
										onKeyDown={(e) => renderBookFocusKey(e, book)}
										bookName={book.volumeInfo.title}
										thumbnail={book.volumeInfo.imageLinks?.smallThumbnail ?? 'URL_PAR_DEFAUT'}
										title={book.volumeInfo.title}
										author={book.volumeInfo.authors}
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
								onClick={goBack}
								onKeyDown={(e) => goBackWithKey(e)}
								imageLinks={selectedBook.volumeInfo.imageLinks.smallThumbnail ?? 'URL_PAR_DEFAUT'}
								title={selectedBook.volumeInfo.title}
								subtitle={selectedBook.volumeInfo.subtitle}
								author={selectedBook.volumeInfo.authors}
								showAddBtn={true}
								addBook={addBookToLibrary}
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
