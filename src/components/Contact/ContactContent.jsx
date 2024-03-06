import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function ContactContent() {
	return (
		<div className='container'>
			<div className="header-and-footer">
				<Header />
				<Footer />
			</div>
			<div className="contact-content">
				<h1>CONTACT CONTENT</h1>
			</div>
		</div>
	)
}
