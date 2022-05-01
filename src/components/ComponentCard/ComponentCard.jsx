import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CallToAction from "../../components/CallToAction/CallToAction";

function ComponentCard({ title, link, previewImage, description }) {
  const style = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-top: 48px;
    box-shadow: 0.2px 0.2px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    .component-card {
      &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        border-bottom: 1px solid #e6e6e6;
      }

      &__title {
        font-family: "Roboto", sans-serif;
        font-size: 36px;
        font-weight: 300;
        padding: 0;
        margin: 0;
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
          <img src={previewImage} alt={title + " preview"} />
        </div>
        <div className="component-card__description">{description}</div>
        <div className="component-card__link">
          <div className="component-card__cta-container">
            <CallToAction
              text="Use Component"
              link={link}
              internalLink={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentCard;
