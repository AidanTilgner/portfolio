import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function Breadcrumbs({ path }) {
  const style = css`
    font-size: 20px;
    margin: 0 0 24px 0;

    @media (min-width: 768px) {
      font-size: 24px;
    }

    .breadcrumb {
      font-weight: 500;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.5);

      &__link {
        color: #2256f2;
        font-weight: 600;
      }

      &__parenthesis {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  `;

  return (
    <div css={style}>
      {path.split("/").map((item, index) => {
        return index !== path.split("/").length - 1 ? (
          <Link
            to={"/" + item}
            className="breadcrumb breadcrumb__link"
            key={index}
          >
            {item} <span className="breadcrumb__parenthesis">/</span>{" "}
          </Link>
        ) : (
          <span to={item} className="breadcrumb" key={index}>
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
