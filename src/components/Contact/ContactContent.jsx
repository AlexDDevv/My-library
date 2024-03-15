import React from 'react'
import Banner from '../Banner/Banner'
import bannerImg from "../../assets/images/banner5.webp"
import data from "../../data/data.json"
import Quote from '../Quotes/Quote'

export default function ContactContent() {
	const quote = data.quotes[1]

	return (
		<main className="contact-container">
			<Banner
				banner={bannerImg}
				location={"contact-banner"}
			/>
			<section className="contact-content">
				<Quote
					quote={quote.quote}
					author={quote.author}

				/>
				<article className="contact-me">
					<p>La création me permet de consolider mes compétences et mon esprit créatif. Bien d'autres projets arriveront dans le futur, et si vous voulez voir mes précédents, il vous suffit de jeter un oeil sur mon profil Github !</p>
					<p>J'espère vous avoir donné l'envie de lire à travers ce site, qu'il vous sera utile !</p>
					<p>Vous pouvez me contacter à travers mes différents réseaux sociaux ou en m'envoyant un mail.</p>
				</article>
			</section>
		</main>
	)
}
