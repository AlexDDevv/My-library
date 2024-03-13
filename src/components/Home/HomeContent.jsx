import React from 'react'
import Banner from '../Banner/Banner'
import bannerImg from "../../assets/images/banner2.webp"
import data from "../../data/data.json"
import Quote from '../Quotes/Quote'

export default function HomeContent() {
    const quote = data.quotes[0]

    return (
        <>
            <main className="home-content">
                <Banner
                    banner={bannerImg}
                    location={"home-banner"}
                />
                <section className="home-section">
                    <Quote
                        quote={quote.quote}
                        author={quote.author}

                    />
                    <article className="home-text">
                        <h2 className="welcome">Soyez les bienvenus chers lecteurs et lectrices !</h2>
                        <p className='home-p'>Depuis plusieurs mois maintenant, j'ai repris goût à la lecture. Ne pas voir le temps passer quand nous sommes plongés dans un livre, celui  qui nous instruit, nous fait rêver ou nous fait voyager. De belles émotions peuvent être transmises par la lecture, celle la même qui nourrit notre imaginaire, et celui des enfants.</p>
                        <p className="home-p">J'aimerais vous transmettre l'envie de lire à travers cette application, vous partager mes différentes lectures, pour peut être vous inspirer.</p>
                    </article>
                </section>
            </main>
        </>
    )
}
