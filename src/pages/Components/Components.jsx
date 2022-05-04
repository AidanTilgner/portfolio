import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MenuList from "../../components/MenuList/MenuList";
import ComponentCard from "../../components/ComponentCard/ComponentCard";

import "./Components.scss";

import { components } from "../../assets/data/components";

function Components() {
  const style = css`
    .components {
      @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
      }

      &__menu {
        @media (min-width: 768px) {
          width: 25%;
        }

        &-title {
          font-family: "Roboto", sans-serif;
          font-size: 32px;
          font-weight: 300;
          text-align: center;
          margin: 56px 0 24px 0;

          @media (min-width: 768px) {
            display: none;
          }
        }
      }

      &__sections {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        margin-top: 48px;
        padding: 24px;

        @media (min-width: 768px) {
          width: 75%;
          margin: 0;
          margin-left: 25%;
        }
      }

      &__section {
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 24px;

        &-title {
          font-family: "Roboto", sans-serif;
          font-size: 36px;
          font-weight: 300;
          margin: 14px 0;
        }

        &-cards {
          @media (min-width: 768px) {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
          }
        }
      }

      &__card-container {
        margin-top: 36px;

        @media (min-width: 768px) {
          width: 45%;
          margin: 18px 24px 14px 0;
        }

        @media (min-width: 1024px) {
          width: 30%;
        }
      }
    }
  `;

  return (
    <div className="components" css={style}>
      <div className="components__menu">
        <h2 className="components__menu-title">Menu</h2>
        <MenuList items={components} />
      </div>
      <div className="components__sections">
        {components.map((section, idx) => {
          return (
            <div
              className="components__section"
              key={
                section.title +
                section.id +
                idx +
                Math.random(36).toString(36).substring(2, 15)
              }
            >
              <h2 className="components__section-title">{section.title}</h2>
              <div className="components__section-cards">
                {section.children.map((card, idx) => {
                  console.log("Id: ", card.id);
                  return (
                    <div
                      className="components__card-container"
                      key={
                        card.title +
                        card.id +
                        idx +
                        Math.random(36).toString(36).substring(2, 15)
                      }
                      id={card.id}
                    >
                      <ComponentCard
                        title={card.title}
                        link={card.link}
                        previewImage={card.previewImage}
                        description={card.description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Components;
