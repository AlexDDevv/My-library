import React from 'react'
import Header from '../components/Header/Header'
import LibraryContent from '../components/Library/LibraryContent'
import Footer from '../components/Footer/Footer'

export default function Library() {
    return (
        <div className="container for-library">
            <Header />
            <LibraryContent />
            <Footer />
        </div>
    )
}
