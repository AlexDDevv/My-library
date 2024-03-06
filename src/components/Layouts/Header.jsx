import React from 'react'
import logo from "../../assets/images/home-img.webp"
import LinkNav from './LinkNav'
import data from "../../data/data.json"

export default function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo du site" className="logo" />
            </div>
            <nav className="nav-bar">
                <ul className="nav-list">
                    {data.navLink.map((item, i) => (
                        <LinkNav
                            key={i}
                            redirection={item.page}
                            content={item.content}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    )
}
