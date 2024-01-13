import React from 'react'

export default function HomeContent() {
    return (
        <>
            <main className="home-content">
                <div className="home-banner">
                    <img src="src/assets/images/banner2.webp" alt="Image d'illustration d'une femme lisant un livre" />
                </div>
                <section className="home-section">
                    <article className="title-quote">
                        <h1 className="title">
                            <q className='quote'>
                                La lecture nourrit l'âme, comme le pain nourrit le corps.
                            </q>
                        </h1>
                        <span className="autor">Antoine Albalat</span>
                    </article>
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
