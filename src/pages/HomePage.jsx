import React from 'react'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import HomeContent from '../components/Home/HomeContent'

export default function HomePage() {
    return (
        <div className="container">
            <Header />
            <Footer />
            <HomeContent />
        </div>
    )
}
