//modules
import React from 'react'

//components
import MenuIcon from '../MenuIcon/MenuIcon'
import CallToAction from '../CallToAction/CallToAction'

//files
import './Navbar.scss'

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar__title">Aidan Tilgner</h2>
            <div className="navbar__options">
                <span className="navbar__cta"><CallToAction text="book a free call"/></span>
                <MenuIcon/>
            </div>
        </div>
    )
}

export default Navbar
