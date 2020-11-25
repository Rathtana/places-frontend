import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

const NavLinks = () => {
    console.log('render in navlink');
    return (
        <ul className="nav-links">
            <li>
            <NavLink exact to="/">ALL USERS</NavLink>
            </li>
            <li>
            <NavLink to="/u1/places">My PLACES</NavLink>
            </li>
            <li>
            <NavLink to="/places/new">ADD PLACE</NavLink>
            </li>
            <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks
