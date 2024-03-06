import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LinkNav({ redirection, content }) {
    return (
        <li className="nav-li">
            <NavLink to={redirection} className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}>{content}</NavLink>
        </li>
    )
}
