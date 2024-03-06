import React from 'react'

export default function SocialLink({ link, title, icon }) {
    return (
        <li className="footer-li">
            <a href={link} target='blank' title={title} className="social-link"><i className={icon}></i></a>
        </li>
    )
}
