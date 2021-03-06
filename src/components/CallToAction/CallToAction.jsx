//modules
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//components

//files
import "./CallToAction.scss";

function CallToAction({ text, link, download, internalLink, clickHandler }) {
  if (link === undefined) {
    console.warn(`You need to put a link in CTA ${text}`);
  }

  let linkHandler = () => {
    if (!download) {
      window.open(link, `${download ? "_self" : "_blank"}`);
    } else if (download) {
      let newLink = document.createElement("a");
      newLink.href = link;
      newLink.download = "aidan-tilgner-resume.pdf";
      newLink.click();
      newLink.remove();
    }
  };

  useEffect(() => {
    let arrows = Array.from(document.getElementsByClassName("cta__arrow"));
    arrows.forEach((arrow) => {
      arrow.style.animationIterationCount = 1;
    });
  }, []);

  let animator = (target, animate) => {
    if (animate) {
      target.children[1].style.animationIterationCount = "infinite";
    } else {
      target.children[1].style.animationIterationCount = 1;
    }
  };

  return internalLink ? (
    <Link
      className="cta"
      onClick={(e) => {
        clickHandler(e);
      }}
      onMouseEnter={(e) => {
        e.preventDefault();
        e.stopPropagation();
        animator(e.target, true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        animator(e.target, false);
      }}
      to={link}
      download={download}
    >
      <p className="cta__text">{text}</p>
      <div className="cta__arrow">
        <svg
          width="61"
          height="16"
          viewBox="0 0 61 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z"
            fill="#2256F2"
          />
        </svg>
      </div>
    </Link>
  ) : (
    <a
      className="cta"
      onClick={(e) => {
        e.preventDefault();
        linkHandler();
        clickHandler(e);
      }}
      onMouseEnter={(e) => {
        e.preventDefault();
        e.stopPropagation();
        animator(e.target, true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        animator(e.target, false);
      }}
      href={link}
      download={download}
    >
      <p className="cta__text">{text}</p>
      <div className="cta__arrow">
        <svg
          width="61"
          height="16"
          viewBox="0 0 61 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z"
            fill="#2256F2"
          />
        </svg>
      </div>
    </a>
  );
}

export default CallToAction;
