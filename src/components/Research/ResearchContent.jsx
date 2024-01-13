import React from 'react'
import { useState } from 'react'
import apiKey from '../../config'
import BookCard from '../Layouts/BookCard'

export default function ResearchContent() {
	const [search, setSearch] = useState("");
	const [bookData, setData] = useState([]);
	console.log(bookData);

	const searchBook = () => {
		fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`)
		.then(res => res.json())
		.then (data => setData(data.items));
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

	const dateBook = [...bookData].sort((a,b) => {
		const dateA = new Date(a.volumeInfo.publishedDate)
		const dateB = new Date(b.volumeInfo.publishedDate)

		return dateA - dateB
	})
	
    return (
        <>
			<main className="research-content">
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
				<section className="research-section">
					<h2 className="find-result">{}</h2>
					<div className="books-container">
						{dateBook.slice(0, 5).map(book => {
							if (book.accessInfo.viewability === "NO_PAGES") {
								return null;
							}
							return (
								<BookCard 
									key={book.id}
									thumbnail={book.volumeInfo.imageLinks?.smallThumbnail ?? 'URL_PAR_DEFAUT'}
									title={book.volumeInfo.title}
									author={book.volumeInfo.authors}
								/>
							)
						})}
					</div>
				</section>
			</main>
		</>
    )
}
