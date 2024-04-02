import React, { useState } from 'react'
import Header from '../components/Header/Header'
import LibraryContent from '../components/Library/LibraryContent'
import Footer from '../components/Footer/Footer'

export default function Library() {
    const [isBookSelected, setIsBookSelected] = useState(false)

    return (
        <div className={`container library ${isBookSelected ? "change-height" : ""}`}>
            <Header />
            <LibraryContent 
                isBookSelected={isBookSelected}
                setIsBookSelected={setIsBookSelected}
            />
            <Footer />
        </div>
    )
}
