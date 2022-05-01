//modules
import React, { useEffect } from "react";

//components
import Menu from "../Menu/Menu";
import CallToAction from "../CallToAction/CallToAction";
import { useLocation, Link } from "react-router-dom";

//files
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        document.getElementById("navbar").style.boxShadow =
          "0px 0.2px 10px rgba(0, 0, 0, 0.25)";
      } else {
        document.getElementById("navbar").style.boxShadow = "none";
      }
    });

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  let endpoint = location.pathname.replace("/", "");
  // captilize first letter of each word
  endpoint = endpoint.replace(/\b\w/g, (l) => l.toUpperCase());
  endpoint = endpoint.replace("/", "");

  return (
    <div className="navbar" id="navbar">
      <h2 className="navbar__title">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Aidan Tilgner{" "}
        </Link>
        <span
          style={{
            color: "rgba(0, 0, 0, .5)",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          {location.pathname !== "/" && `/ ${endpoint}`}
        </span>
      </h2>
      <div className="navbar__options">
        <span className="navbar__cta">
          <CallToAction
            text="Book a Call"
            link="https://calendly.com/vvibrant/client-call"
          />
        </span>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
