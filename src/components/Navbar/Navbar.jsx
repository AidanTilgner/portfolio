//modules
import React from 'react'

//components
import Menu from '../MenuIcon/MenuIcon'
import CallToAction from '../CallToAction/CallToAction'

//files
import './Navbar.scss'

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar__title">Aidan Tilgner</h2>
            <div className="navbar__options">
                <span className="navbar__cta">
                    <CallToAction text="book a free call" link="https://calendly.com/vvibrant/15min"/>
                </span>
                <Menu/>
            </div>
        </div>
    )
}

export default Navbar
