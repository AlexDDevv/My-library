import React from 'react'
import { useState } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import BookCard from '../Layouts/BookCard'

export default function ResearchContent() {
	const [search, setSearch] = useState("");
	const [bookData, setData] = useState([]);
	console.log(bookData);

	const searchBook = () => {
		fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAoDVvtRj1H4UxIM7BHJTWEYYAa0Uz4Z5E`)
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
	
    return (
        <div className='container'>
			<Header />
			<Footer />
			<main className="research-content">
				<div className="research-banner">
                	<img src="src/assets/images/banner1.webp" alt="Image d'illustration d'une femme lisant un livre" />
            	</div>
				<div className="find-book">
					<h1 className="title-search">Trouves un livre</h1>
					<div className="search-bar">
						<input 
							type="text" 
							placeholder="Entres le nom d'un livre" 
							id="searchBar" 
							value={search} 
							onChange={e => setSearch(e.target.value)} 
							onKeyDown={handleKey}
						/>
						<button className='search-btn' onClick={handleClick}>
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</div>
				</div>
				<section className="research-section">
					<h2 className="find-result">{search}</h2>
					<div className="books-container">
						{bookData.map(book => (
							<BookCard 
								key={book.id}
								thumbnail={book.volumeInfo.imageLinks?.smallThumbnail ?? 'URL_PAR_DEFAUT'}
								title={book.volumeInfo.title}
								author={book.volumeInfo.authors}
							/>
						))}
					</div>
				</section>
			</main>
		</div>
    )
}
