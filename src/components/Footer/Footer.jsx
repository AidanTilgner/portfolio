//modules
import React from 'react'

//components
import CallToAction from '../CallToAction/CallToAction'

//icons
import InstagramIcon from '../../assets/Icons/InstagramIcon.svg'
import PinterestIcon from '../../assets/Icons/PinterestIcon.svg'
import GithubIcon from '../../assets/Icons/GithubIcon.svg'
import LinkedInIcon from '../../assets/Icons/LinkedInIcon.svg'

//files
import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <h1 className="footer__subtitle">Get in Touch</h1>
            <div className="footer__content">
                <p className="footer__text">+1 (503) 200 - 7472</p>
                <CallToAction
                    text="Book a Call"
                    link="https://calendly.com/vvibrant/client-call"
                />
                <p className="footer__text">aidan.tilgner@vvibrant.dev</p>
                <CallToAction
                    text="Open Inbox"
                    link="mailto:aidan.tilgner@vvibrant.dev"
                />
            </div>
            <h1 className="footer__subtitle">
                Get <span className="ten">Discounts Shopping</span> Online
            </h1>
            <a className="footer__link" href="https://www.rakuten.com/r/AIDANT146?eeid=28187" 
            target="_blank" rel="noopener noreferrer">
                Click Here
            </a>
            <h1 className="footer__subtitle">
                Read my <span className="ten">Medium</span> Blog
            </h1>
            <a className="footer__link" href="https://aidan-tilgner.medium.com/" 
            target="_blank" rel="noopener noreferrer">
                Click Here
            </a>
            <h1 className="footer__subtitle">
                Check out my <span className="ten">YouTube</span> Channel
            </h1>
            <a className="footer__link" href="https://www.youtube.com/channel/UCKv_EugPMoiue4fGvgKy70A" 
            target="_blank" rel="noopener noreferrer">
                Click Here
            </a>
            <h1 className="footer__subtitle">
                Follow me on <span className="ten">Social Media</span>
            </h1>
            <div className="footer__icons">
                <a href="https://www.linkedin.com/in/aidan-tilgner-0a4a31157/" className="footer__icon-link" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="linkedin link" />
                    </a>
                <a href="https://www.pinterest.com/aidan6721/_saved/" className="footer__icon-link" target="_blank" rel="noopener noreferrer">
                    <img src={PinterestIcon} alt="pinterest link" />
                    </a>
                <a href="https://github.com/AidanTilgner/" className="footer__icon-link" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="github link" />
                    </a>
                <a href="https://www.instagram.com/aidan.tilgner/" className="footer__icon-link" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramIcon} alt="instagram link" />
                    </a>
            </div>
            <p className="footer__copyright">Copyright © Aidan Tilgner 2021</p>
        </div>
        
    )
}

export default Footer
