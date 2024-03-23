import React from 'react'
import Header from '../components/Header/Header'
import ContactContent from '../components/Contact/ContactContent'
import Footer from '../components/Footer/Footer'

export default function Contact() {
    return (
        <div className="container for-contact">
            <Header />
            <ContactContent />
            <Footer />
        </div>
    )
}
