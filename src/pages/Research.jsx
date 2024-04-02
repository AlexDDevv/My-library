import React, { useState } from 'react'
import Header from '../components/Header/Header'
import ReasearchContent from '../components/Research/ResearchContent'
import Footer from '../components/Footer/Footer'

export default function Research() {
    const [isBookSelected, setIsBookSelected] = useState(false)
    const tablet = innerWidth <= 768

    return (
        <div className={`container for-research ${isBookSelected && tablet ? "change-height" : ""}`}>
            <Header />
            <ReasearchContent 
                isBookSelected={isBookSelected}
                setIsBookSelected={setIsBookSelected}
            />
            <Footer />
        </div>
    )
}
