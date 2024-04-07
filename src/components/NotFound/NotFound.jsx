import React from 'react'
import notFoundImg from "../../assets/images/notFoundImg.webp"
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="section-notFound">
            <div className="img-container">
                <img src={notFoundImg} alt="Image d'un livre dans une caverne" />
            </div>
            <h1 className='title-404'>Je crains que vous vous soyez égarés...</h1>
            <p className="p-404">Suivez la lumière émanant du livre pour trouver la sortie !</p>
            <Link to="/" className='redirection'>
                <span data-letter="V">V</span>
                <span data-letter="E">E</span>
                <span data-letter="N">N</span>
                <span data-letter="E">E</span>
                <span data-letter="Z">Z</span>
                <span data-letter="!">!</span>
            </Link>
        </section>
    )
}
