import React from 'react'
import Header from '../components/Layouts/Header'
import HomeContent from '../components/Home/HomeContent'
import Footer from '../components/Layouts/Footer'

export default function HomePage() {
    return (
        <div className="container">
            <Header />
            <HomeContent />
            <Footer />
        </div>
    )
}
