import React from 'react'

export default function SocialLink({ link, title, icon }) {
    return (
        <a href={link} target='blank' title={title} className="social-link">
            <li className="footer-li">
                <i className={icon}></i>
            </li>
        </a>
    )
}
