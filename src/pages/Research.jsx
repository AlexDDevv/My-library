import React, { useState } from 'react'
import Header from '../components/Header/Header'
import ReasearchContent from '../components/Research/ResearchContent'
import Footer from '../components/Footer/Footer'

export default function Research() {
    const [isBookSelected, setIsBookSelected] = useState(false)

    return (
        <div className={`container for-research ${isBookSelected ? "change-height" : ""}`}>
            <Header />
            <ReasearchContent 
                isBookSelected={isBookSelected}
                setIsBookSelected={setIsBookSelected}
            />
            <Footer />
        </div>
    )
}
