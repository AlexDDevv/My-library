import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function LibraryContent() {
	return (
		<div className='container'>
			<div className="header-and-footer">
				<Header />
				<Footer />
			</div>
			<div className="library-content">
				<h1>LIBRARY CONTENT</h1>
			</div>
		</div>
	)
}
