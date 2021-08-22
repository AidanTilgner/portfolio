//modules
import React from 'react'

//components
import ProfilePic from '../../assets/Images/me.jpg'
import Card from '../../components/Card/Card'
import Arrow from '../../assets/Icons/Arrow.svg'

//files
import './Home.scss'

function Home() {
    return (
        <div className="home">
            <div className="home__profile-pic">
                <img src={ProfilePic} alt="my profile picture" className="home__profile-pic-image" />
            </div>
            <div className="home__tagline">
                <h1 className="home__tagline-1">Hey I'm Aidan</h1>
                <h1 className="home__tagline-2">
                    Web Presence Developer
                </h1>
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
                <Card>

                </Card>
            </div>
        </div>
    )
}

export default Home
