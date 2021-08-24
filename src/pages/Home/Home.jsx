//modules
import React from 'react'

//components
import ProfilePic from '../../assets/Images/me.jpg'
import Card from '../../components/Card/Card'
import Arrow from '../../assets/Icons/Arrow.svg'
import ReactIcon from '../../assets/Icons/ReactIcon.svg'
import JavascriptIcon from '../../assets/Icons/JavascriptIcon.svg'
import NodeJSIcon from '../../assets/Icons/NodeJSIcon.svg'
import MySQLIcon from '../../assets/Icons/MySQLIcon.svg'
import FigmaIcon from '../../assets/Icons/FigmaIcon.svg'
import CallToAction from '../../components/CallToAction/CallToAction'

//files
import './Home.scss'
import resume from '../../assets/files/aidan-tilgner-resume.pdf'

function Home() {
    return (
        <div className="home">
            <div className="home__hero">
                <div className="home__profile-pic">
                    <img src={ProfilePic} alt="my profile picture" className="home__profile-pic-image" />
                </div>
                <div className="home__tagline">
                    <h1 className="home__tagline-1">
                        Hey I'm Aidan
                    </h1>
                    <h1 className="home__tagline-2">
                        Web Presence Developer
                    </h1>
                </div>
            </div>
            <div className="home__CTA-circle">
                <p className="home__CTA-circle-caption">What's that?</p>
                <div 
                    className="home__CTA-circle-circle"
                    onClick={e => {
                        e.preventDefault()
                        document.getElementById('definition').scrollIntoView({
                            behavior: "smooth"
                        })
                    }}
                >
                    <img src={Arrow} alt="arrow" className="home__CTA-circle-circle-arrow"/>
                </div>
            </div>
            <div className="definition" id="definition">
                <Card title="Web Presence Developer">
                    <p className="definition__caption">noun</p>
                    <div className="definition__section">
                        <p className="definition__number"><span className="bold">1</span></p>
                        <p className="definition__text">
                            Someone who is <span className="bold">proficient</span> in strategizing and carrying 
                            out the <span className="bold">design</span>, <span className="bold">marketing</span> 
                            strategy, and <span className="bold">development</span> 
                            of a <span className="bold">website</span>.
                        </p>
                        <CallToAction text="Learn to do this"/>
                    </div>
                    <div className="definition__section">
                        <p className="definition__number"><span className="bold">2</span></p>
                        <p className="definition__text">
                            The right person to call if you need a website <span className="bold">designed</span>
                            , <span className="bold">developed</span>, 
                            or <span className="bold">updated</span>.
                        </p>
                        <CallToAction text="Book a Free Call"/>
                    </div>
                    <div className="definition__section">
                        <p className="definition__number"><span className="bold">3</span></p>
                        <p className="definition__text">
                        The right person to call if you need 
                        to <span className="bold">develop</span>, <span className="bold">update</span>
                        , or <span className="bold">maintain</span> your presence on the web.
                        </p>
                        <CallToAction text="Book a Free Call"/>
                    </div>
                </Card>
            </div>
            <div className="skills">
                <Card
                    title="Technologies that I Use"
                >
                    <div className="skills__content">
                        <div className="skills__skill">
                            <div className="skills__header">
                                <img src={ReactIcon} className="skills__icon"></img>
                                <h2 className="skills__subtitle">React</h2>
                                
                            </div>
                            <p className="skills__description">
                                React is a javascript framework that lets you easily create 
                                frontend UI’s and implement JavaScript.
                            </p>
                            <CallToAction
                                text="Learn More"
                                link="https://reactjs.org/"
                            />
                        </div>
                        <div className="skills__skill">
                            <div className="skills__header">
                                <img src={NodeJSIcon} className="skills__icon"></img>
                                <h2 className="skills__subtitle">Node.js</h2>
                                
                            </div>
                            <p className="skills__description">
                                Node.js is a Javascript runtime that lets you run 
                                servers using vanilla JavaScript.
                            </p>
                            <CallToAction
                                text="Learn More"
                                link="https://nodejs.org/en/"
                            />
                        </div>
                        <div className="skills__skill">
                            <div className="skills__header">
                                <img src={JavascriptIcon} className="skills__icon"></img>
                                <h2 className="skills__subtitle">JavaScript</h2>
                                
                            </div>
                            <p className="skills__description">
                            JavaScript is a scripting or programming language that allows you to 
                            implement complex features on web pages.
                            </p>
                            <CallToAction
                                text="Learn More"
                                link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
                            />
                        </div>
                        <div className="skills__skill">
                            <div className="skills__header">
                                <img src={MySQLIcon} className="skills__icon"></img>
                                <h2 className="skills__subtitle">MySQL</h2>
                                
                            </div>
                            <p className="skills__description">
                                MySQL is a SQL database with powerful features that lets 
                                you store, edit, and maintain large amounts of data.
                            </p>
                            <CallToAction
                                text="Learn More"
                                link="https://www.mysql.com/"
                            />
                        </div>
                        <div className="skills__skill">
                            <div className="skills__header">
                                <img src={FigmaIcon} className="skills__icon"></img>
                                <h2 className="skills__subtitle">Figma</h2>
                                
                            </div>
                            <p className="skills__description">
                                Figma is a graphic design tool commonly used for web design.
                            </p>
                            <CallToAction
                                text="Learn More"
                                link="https://www.figma.com/"
                            />
                        </div>
                    </div>
                    <div className="skills__footer">
                        <CallToAction
                            text="Download my Resume"
                            link={resume}
                            download={"aidan-tilgner-resume"}
                        />
                    </div>
                </Card>
            </div>
            <div className="services">
                <Card
                    title="My Services"
                >

                </Card>
            </div>
            <div className="projects">
                <Card
                    title="Featured Projects"
                >

                </Card>
            </div>
        </div>
    )
}

export default Home
