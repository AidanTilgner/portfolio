import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MenuList from "../../components/MenuList/MenuList";
import ComponentCard from "../../components/ComponentCard/ComponentCard";

import "./Components.scss";

function Components() {
  const style = css`
    .components {
      &__menu {
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
      }

      &__section {
        &-title {
          font-family: "Roboto", sans-serif;
          font-size: 36px;
          font-weight: 300;
        }
      }
    }
  `;

  const sections = [
    {
      title: "Forms",
      id: 1,
      children: [
        {
          title: "Dynamic Form",
          id: "dynamic-form",
          link: "/docs/components/forms/dynamic-form",
          previewImage: "",
          description:
            "This Dynamic Form component takes in a “fields” prop among others to dynamically render a form with all the necessary functionality you’d expect.",
        },
      ],
    },
  ];

  return (
    <div className="components" css={style}>
      <div className="components__menu">
        <h2 className="components__menu-title">Menu</h2>
        <MenuList items={sections} />
      </div>
      <div className="components__sections">
        {sections.map((section) => {
          return (
            <div className="components__section" key={section.id}>
              <h2 className="components__section-title">{section.title}</h2>
              <div className="components__section-cards">
                {section.children.map((card) => {
                  return (
                    <ComponentCard
                      key={card.title}
                      title={card.title}
                      link={card.link}
                      previewImage={card.previewImage}
                      description={card.description}
                    />
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
