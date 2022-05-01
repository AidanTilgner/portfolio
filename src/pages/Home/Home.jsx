//modules
import React from "react";

//components
import ProfilePic from "../../assets/Images/me.jpg";
import Card from "../../components/Card/Card";
import Arrow from "../../assets/Icons/Arrow.svg";
import ReactIcon from "../../assets/Icons/ReactIcon.svg";
import JavascriptIcon from "../../assets/Icons/JavascriptIcon.svg";
import NodeJSIcon from "../../assets/Icons/NodeJSIcon.svg";
import MySQLIcon from "../../assets/Icons/MySQLIcon.svg";
import FigmaIcon from "../../assets/Icons/FigmaIcon.svg";
import CallToAction from "../../components/CallToAction/CallToAction";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Footer from "../../components/Footer/Footer";

//images
import InStock1 from "../../assets/Images/instock-home.jpg";
import InStock2 from "../../assets/Images/instock-inventory.jpg";
import InStock3 from "../../assets/Images/instock-new-warehouse.jpg";
import Soapbox1 from "../../assets/Images/soapbox-home.jpg";
import Soapbox2 from "../../assets/Images/soapbox-profile.jpg";
import Soapbox3 from "../../assets/Images/soapbox-topics.jpg";
import Soapbox4 from "../../assets/Images/soapbox-upload.jpg";

//files
import "./Home.scss";
import resume from "../../assets/files/aidan-tilgner-resume.pdf";

function Home() {
  const project1Images = [InStock1, InStock2, InStock3];
  const project2Images = [Soapbox1, Soapbox2, Soapbox3, Soapbox4];

  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__profile-pic">
          <img
            src={ProfilePic}
            alt="my profile"
            className="home__profile-pic-image"
          />
        </div>
        <div className="home__tagline">
          <h1 className="home__tagline-1">Hey I'm Aidan</h1>
          <h1 className="home__tagline-2">Web Presence Developer</h1>
        </div>
      </div>
      <div className="home__CTA-circle">
        <p className="home__CTA-circle-caption">What's that?</p>
        <div
          className="home__CTA-circle-circle"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("definition").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <img
            src={Arrow}
            alt="arrow"
            className="home__CTA-circle-circle-arrow"
          />
        </div>
      </div>
      <div className="definition" id="definition">
        <Card title="Web Presence Developer">
          <p className="definition__caption">noun</p>
          <div className="definition__section">
            <p className="definition__number">
              <span className="bold">1</span>
            </p>
            <p className="definition__text">
              Someone who is <span className="bold">proficient</span> in
              strategizing and carrying out the{" "}
              <span className="bold">design</span>,{" "}
              <span className="bold">marketing </span>
              strategy, and <span className="bold">development </span> of a{" "}
              <span className="bold">website</span>.
            </p>
            <CallToAction
              text="Learn to do this"
              link="https://www.wyzant.com/Tutors/DevelopmentWithAidan"
            />
          </div>
          <div className="definition__section">
            <p className="definition__number">
              <span className="bold">2</span>
            </p>
            <p className="definition__text">
              The right person to call if you need a website{" "}
              <span className="bold">designed</span>,{" "}
              <span className="bold">developed</span>, or{" "}
              <span className="bold">updated</span>.
            </p>
            <CallToAction
              text="Book a Call"
              link="https://calendly.com/vvibrant/client-call"
            />
          </div>
          <div className="definition__section">
            <p className="definition__number">
              <span className="bold">3</span>
            </p>
            <p className="definition__text">
              The right person to call if you need to{" "}
              <span className="bold">develop</span>,{" "}
              <span className="bold">update</span>, or{" "}
              <span className="bold">maintain</span> your presence on the web.
            </p>
            <CallToAction
              text="Book a Call"
              link="https://calendly.com/vvibrant/client-call"
            />
          </div>
        </Card>
      </div>
      <div className="skills">
        <Card title="Technologies that I Use">
          <div className="skills__content">
            <div className="skills__skill">
              <div className="skills__header">
                <img src={ReactIcon} alt="react" className="skills__icon"></img>
                <h2 className="skills__subtitle">React</h2>
              </div>
              <p className="skills__description">
                React is a javascript framework that lets you easily create
                frontend UI’s and implement JavaScript.
              </p>
              <CallToAction text="Learn More" link="https://reactjs.org/" />
            </div>
            <div className="skills__skill">
              <div className="skills__header">
                <img
                  src={NodeJSIcon}
                  alt="node.js"
                  className="skills__icon"
                ></img>
                <h2 className="skills__subtitle">Node.js</h2>
              </div>
              <p className="skills__description">
                Node.js is a Javascript runtime that lets you run servers using
                vanilla JavaScript.
              </p>
              <CallToAction text="Learn More" link="https://nodejs.org/en/" />
            </div>
            <div className="skills__skill">
              <div className="skills__header">
                <img
                  src={JavascriptIcon}
                  alt="javascript"
                  className="skills__icon"
                ></img>
                <h2 className="skills__subtitle">JavaScript</h2>
              </div>
              <p className="skills__description">
                JavaScript is a scripting or programming language that allows
                you to implement complex features on web pages.
              </p>
              <CallToAction
                text="Learn More"
                link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
              />
            </div>
            <div className="skills__skill">
              <div className="skills__header">
                <img src={MySQLIcon} alt="mysql" className="skills__icon"></img>
                <h2 className="skills__subtitle">MySQL</h2>
              </div>
              <p className="skills__description">
                MySQL is a SQL database with powerful features that lets you
                store, edit, and maintain large amounts of data.
              </p>
              <CallToAction text="Learn More" link="https://www.mysql.com/" />
            </div>
            <div className="skills__skill">
              <div className="skills__header">
                <img src={FigmaIcon} alt="figma" className="skills__icon"></img>
                <h2 className="skills__subtitle">Figma</h2>
              </div>
              <p className="skills__description">
                Figma is a graphic design tool commonly used for web design.
              </p>
              <CallToAction text="Learn More" link="https://www.figma.com/" />
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
        <Card title="My Services">
          <div className="services__content">
            <div className="services__section">
              <h2 className="services__title">Design</h2>
              <p className="services__description">
                I will <span className="bold">design a website</span> for you
                incorporating fresh,{" "}
                <span className="bold">useful content</span> for your users
                and/or potential clients.
              </p>
            </div>
            <div className="services__section">
              <h2 className="services__title">Development</h2>
              <p className="services__description">
                I will <span className="bold">develop</span>,{" "}
                <span className="bold">deploy</span>, and{" "}
                <span className="bold">maintain</span> a website for you,
                utilizing best-practices and{" "}
                <span className="bold">industry standard technologies</span>.
              </p>
            </div>
            <div className="services__section">
              <h2 className="services__title">Marketing</h2>
              <p className="services__description">
                I will <span className="bold">strategize</span> and implement a
                plan to <span className="bold">generate leads</span> to your
                website, and ultimately{" "}
                <span className="bold">create conversions</span>.
              </p>
            </div>
            <div className="services__section">
              <h2 className="services__title">Social Media</h2>
              <p className="services__description">
                I’ll manage your company’s{" "}
                <span className="bold">social media presence</span> so that you
                don’t have to.
              </p>
            </div>
          </div>
          <div className="services__footer">
            <CallToAction
              text="Get a Free Quote"
              link="mailto:aidan.tilgner@vvibrant.dev"
            />
          </div>
        </Card>
      </div>
      <div className="projects">
        <Card title="Featured Projects">
          <div className="projects__content">
            <div className="projects__project">
              <ImageSlider images={project1Images} />
              <div className="projects__info">
                <h2 className="projects__title">InStock</h2>
                <p className="projects__description">
                  InStock is a warehouse management interface. It uses React,
                  Node and Express as technologies.
                </p>
                <div className="projects__ctas">
                  <CallToAction
                    text="View on Github"
                    link="https://github.com/cdd741/In-Stock"
                  />
                  <div className="projects__spacer"></div>
                  {/* <CallToAction
                                        text="View Case Study"
                                        link="#"
                                    /> */}
                </div>
              </div>
            </div>
            <div className="projects__project">
              <ImageSlider images={project2Images} />
              <div className="projects__info">
                <h2 className="projects__title">Soapbox</h2>
                <p className="projects__description">
                  Soapbox is a prototype social media platform for open debate.
                </p>
                <div className="projects__ctas">
                  <CallToAction
                    text="View on Github"
                    link="https://github.com/AidanTilgner/tilgner-aidan-soapbox"
                  />
                  <div className="projects__spacer"></div>
                  {/* <CallToAction
                                        text="View Case Study"
                                        link="#"
                                    /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="projects__footer">
            <CallToAction
              text="View all Projects"
              link="https://github.com/AidanTilgner"
            />
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
