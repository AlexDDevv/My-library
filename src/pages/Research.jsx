import React from 'react'
import Header from '../components/Layouts/Header'
import ReasearchContent from '../components/Research/ResearchContent'
import Footer from '../components/Layouts/Footer'

export default function Research() {
    return (
        <div className="container">
            <Header />
            <ReasearchContent />
            <Footer />
        </div>
    )
}
