import React from "react";
import { Link } from "react-router-dom";

/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

function MiniCTA({ text, link, internalLink }) {
  const arrow_side_to_side_animation = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(20px);
    }
  `;

  const style = css`
    .mini-cta {
      display: flex;
      align-items: center;
      justify-content: right;

      &:hover {
        font-weight: 600;
      }

      &__text {
        font-size: 14px;
        font-weight: 500;
        color: #000;
        margin-right: 8px;
      }

      &__arrow {
        height: 32px;
        width: 32px;
        background-color: #2256f2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

        &:hover {
          background-color: #1a4df2;
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        }
      }

      &__icon {
        color: white;
        font-size: 18px;
      }
    }

    .hover {
      animation: ${arrow_side_to_side_animation} 1s ease-in-out infinite;
    }
  `;

  return (
    <div css={style}>
      {internalLink ? (
        <Link style={{ textDecoration: "none" }} to={link}>
          <div className="mini-cta">
            <p className="mini-cta__text">{text}</p>
            <div className="mini-cta__arrow">
              <i className="material-icons mini-cta__icon">arrow_forward</i>
            </div>
          </div>
        </Link>
      ) : (
        <a
          style={{ textDecoration: "none" }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mini-cta">
            <p className="mini-cta__text">{text}</p>
            <div className="mini-cta__arrow">
              <i className="material-icons mini-cta__icon">arrow_forward</i>
            </div>
          </div>
        </a>
      )}
    </div>
  );
}

export default MiniCTA;
