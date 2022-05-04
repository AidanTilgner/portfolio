import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { components } from "../../assets/data/components";
import { useParams } from "react-router-dom";

function Docs() {
  const { section_id, component_id } = useParams();

  const component = components
    .find((section) => {
      console.log("Section: ", section);
      console.log("Section ID: ", section_id);
      return section.id === section_id;
    })
    .children.find((component) => {
      console.log("Component: ", component);
      console.log("Component ID: ", component_id);
      return component.id === component_id;
    });

  const style = css`
    padding-block-start: 36px;
    padding-inline-start: 24px;
    padding-inline-end: 24px;
    box-sizing: border-box;

    @media (min-width: 768px) {
      padding-block-start: 48px;
      padding-inline-start: 36px;
      padding-inline-end: 36px;
    }

    @media (min-width: 1280px) {
      padding-block-start: 48px;
      padding-inline-start: 180px;
      padding-inline-end: 180px;
    }

    .docs {
      &__body {
        display: flex;
        justify-content: space-between;
      }

      &__preview {
        width: 100%;
        // height: 200px;
        box-shadow: 0.2px 0.2px 6px rgba(0, 0, 0, 0.25);
        margin: 24px 0;
        aspect-ratio: 16/9;

        @media (min-width: 768px) {
          width: 54%;
          aspect-ratio: 16/9;
          margin: 0;
        }
      }

      &__content {
        font-size: 16px;

        @media (min-width: 768px) {
          width: 42%;
          font-size: 18px;
        }
      }

      &__list-section {
        &__title {
          font-size: 20px;
          font-weight: 600;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
        }

        &__list {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
        }
      }

      &__description {
        font-family: "Roboto", sans-serif;
        font-weight: 300;

        @media (min-width: 768px) {
          margin-top: 0;
        }
      }
    }
  `;

  return (
    <div css={style} className="docs">
      <Breadcrumbs path={"Components/Dynamic Form"} />
      <div className="docs__body">
        <div className="docs__preview">
          <img
            src={component.previewImage}
            alt={component.title + " Preview"}
          />
        </div>
        <div className="docs__content">
          <p className="docs__description">{component.description}</p>
          <div className="docs__list-section">
            <p className="docs__list-section__title">Required Dependencies</p>
            <ul className="docs__list-section__list">
              {component.requiredDependencies.map((dependency) => {
                return (
                  <li
                    key={dependency}
                    className="docs__list-section__list-item"
                  >
                    {dependency}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="docs__list-section">
            <p className="docs__list-section__title">Downloads</p>
            <ul className="docs__list-section__list">
              {component.downloads.map((download) => {
                return (
                  <li
                    key={download.title}
                    className="docs__list-section__list-item"
                  >
                    <a href={download.url}>{download.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
