import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

export default function ResearchContent() {
    return (
        <div className='container'>
			<div className="header-and-footer">
				<Header />
				<Footer />
			</div>
			<div className="research-content">
				<h1>RESEARCH CONTENT</h1>
			</div>
		</div>
    )
}
