import React from 'react'
import data from "../../data/data.json"
import SocialLink from './SocialLink'

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-list">
                {data.socialLink.map((item, i) => (
                    <SocialLink
                        key={i}
                        link={item.link}
                        title={item.title}
                        icon={item.icon}
                    />
                ))}
            </ul>
        </footer>
    )
}