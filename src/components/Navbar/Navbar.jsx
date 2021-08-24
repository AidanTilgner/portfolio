//modules
import React, { useEffect } from 'react'

//components
import Menu from '../MenuIcon/MenuIcon'
import CallToAction from '../CallToAction/CallToAction'

//files
import './Navbar.scss'

function Navbar() {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 0){
                document.getElementById("navbar").style.boxShadow = "0px 0.2px 10px rgba(0, 0, 0, 0.25)"
            }else{
                document.getElementById("navbar").style.boxShadow = "none"
            }
        });

        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    return (
        <div className="navbar" id="navbar">
            <h2 className="navbar__title">Aidan Tilgner</h2>
            <div className="navbar__options">
                <span className="navbar__cta">
                    <CallToAction text="Book a Call" link="https://calendly.com/vvibrant/client-call"/>
                </span>
                <Menu/>
            </div>
        </div>
    )
}

export default Navbar
