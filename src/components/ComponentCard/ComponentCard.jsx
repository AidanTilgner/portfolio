import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MiniCTA from "../MiniCTA.jsx/MiniCTA";

function ComponentCard({ title, link, previewImage, description }) {
  const style = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    box-shadow: 0.2px 0.2px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 500px;

    .component-card {
      &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        border-bottom: 1px solid #e6e6e6;
      }

      &__title {
        // font-family: "Roboto", sans-serif;
        font-size: 32px;
        font-weight: 300;
        font-weight: 500;
        padding: 18px 14px;
        margin: 0;
      }

      &__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
      }

      &__preview {
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-img {
          width: 95%;
          box-shadow: 0.2px 0.2px 6px 0px rgba(0, 0, 0, 0.25);
        }
      }

      &__description {
        padding: 24px 14px;
        font-size: 16px;
      }

      &__cta-container {
        padding: 14px 14px 24px 14px;
      }
    }
  `;

  return (
    <div className="component-card" css={style}>
      <div className="component-card__header">
        <h2 className="component-card__title">{title}</h2>
      </div>
      <div className="component-card__body">
        <div className="component-card__preview">
          <img
            className="component-card__preview-img"
            src={previewImage}
            alt={title + " Preview"}
          />
        </div>
        <div className="component-card__description">{description}</div>
        <div className="component-card__link">
          <div className="component-card__cta-container">
            <MiniCTA text="Use Component" link={link} internalLink={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentCard;
