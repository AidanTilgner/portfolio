//modules
import React, { useState, useEffect } from "react";

//components
import MenuIcon from '../../assets/Icons/MenuIcon.svg'
import CloseIcon from '../../assets/Icons/CloseIcon.svg'
import CallToAction from "../CallToAction/CallToAction";
import LinkedIn from '../../assets/Icons/LinkedInIcon.svg'
import Github from '../../assets/Icons/GithubIcon.svg'
import Pinterest from '../../assets/Icons/PinterestIcon.svg'
import Youtube from '../../assets/Icons/YouTubeIcon.svg'

//files
import "./MenuIcon.scss";

function Menu() {
    let [prompt, setPrompt] = useState(true);
    const [ShowMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (!prompt) {
        document.getElementById(
            "icon-prompt-circle"
        ).style.animationIterationCount = "1";
        }
    }, [prompt]);

    useEffect(() => {
        
    }, [ShowMenu])

    return (
        <div
        className="menu"
        onClick={(e) => {
            e.preventDefault();
            console.log("clicked");
            setPrompt(false);
        }}
        >
        <img src={MenuIcon} alt="open-menu" className="menu__men"/>
        <div 
            className="menu__prompt-circle" 
            id="icon-prompt-circle"
            onClick={e => {
                e.preventDefault()
                setShowMenu(true)
            }}
        ></div>
        {
            ShowMenu &&
            <div className="menu__overlay">
                <img 
                    src={CloseIcon} 
                    alt="close-menu" 
                    className="menu__close-icon"
                    onClick={e => {
                        e.preventDefault()
                        setShowMenu(false)
                    }}
                />
                <div className="menu__menu">
                    <CallToAction text="Get Lessons" link="https://www.wyzant.com/Tutors/DevelopmentWithAidan"/>
                    <CallToAction text="Book a Call" link="https://calendly.com/vvibrant/15min"/>
                    <CallToAction text="Read my Blog" link="https://aidan-tilgner.medium.com/"/>
                    <div className="menu__social-icons">
                        <a href="https://www.linkedin.com/in/aidan-tilgner-0a4a31157/" target="_blank" rel="noopener noreferrer" className="menu__social-link">
                            <img src={LinkedIn} alt="linkedin account" className="menu__social-icon" />
                        </a>
                        <a href="https://github.com/AidanTilgner/" target="_blank" rel="noopener noreferrer" className="menu__social-link">
                            <img src={Github} alt="github account" className="menu__social-icon" />
                        </a>
                        <a href="https://www.pinterest.com/aidan6721/_saved/" target="_blank" rel="noopener noreferrer" className="menu__social-link">
                            <img src={Pinterest} alt="pinterest account" className="menu__social-icon" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCKv_EugPMoiue4fGvgKy70A" target="_blank" rel="noopener noreferrer" className="menu__social-link">
                            <img src={Youtube} alt="youtube channel" className="menu__social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        }
        
        </div>
    );
}

export default Menu;
