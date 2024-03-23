import React from 'react'
import Header from '../components/Header/Header'
import HomeContent from '../components/Home/HomeContent'
import Footer from '../components/Footer/Footer'

export default function HomePage() {
    return (
        <div className="container for-home">
            <Header />
            <HomeContent />
            <Footer />
        </div>
    )
}
