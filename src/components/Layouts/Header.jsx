import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <div className="avatar-container">
                <div className="avatar-img">
                    <img src="../src/assets/images/moi.webp" alt="Portrait de moi" className="avatar" />
                </div>
                <div className="avatar-name">
                    <h3>Alexis D</h3>
                </div>
            </div>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-li">
                        <NavLink to={"/"} className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}>Accueil</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to={"/library"} className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}>Bibliothèque</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to={"/recherche"} className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}>Recherche</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to={"/contact"} className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
