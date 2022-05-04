import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MenuList from "../../components/MenuList/MenuList";
import ComponentCard from "../../components/ComponentCard/ComponentCard";

import "./Components.scss";

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
        {
          title: "Form",
          id: "form",
          link: "/docs/components/forms/form",
          previewImage: "",
          description:
            "This Form component takes in a “fields” prop among others to dynamically render a form with all the necessary functionality you’d expect.",
        },
        {
          title: "Form",
          id: "form",
          link: "/docs/components/forms/form",
          previewImage: "",
          description:
            "This Form component takes in a “fields” prop among others to dynamically render a form with all the necessary functionality you’d expect.",
        },
        {
          title: "Form",
          id: "form",
          link: "/docs/components/forms/form",
          previewImage: "",
          description:
            "This Form component takes in a “fields” prop among others to dynamically render a form with all the necessary functionality you’d expect.",
        },
      ],
    },
    {
      title: "Buttons",
      id: 2,
      children: [
        {
          title: "Button",
          id: "button",
          link: "/docs/components/buttons/button",
          previewImage: "",
          description:
            "This Button component takes in a “children” prop among others to dynamically render a button with all the necessary functionality you’d expect.",
        },
        {
          title: "Button",
          id: "button",
          link: "/docs/components/buttons/button",
          previewImage: "",
          description:
            "This Button component takes in a “children” prop among others to dynamically render a button with all the necessary functionality you’d expect.",
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
        {sections.map((section, idx) => {
          return (
            <div
              className="components__section"
              key={section.title + section.id + idx}
            >
              <h2 className="components__section-title">{section.title}</h2>
              <div className="components__section-cards">
                {section.children.map((card, idx) => {
                  return (
                    <div
                      className="components__card-container"
                      key={card.title + card.id + idx}
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
