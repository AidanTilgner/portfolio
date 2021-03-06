import React, { useState, useEffect } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-scroll";

import "./MenuList.scss";

function MenuList({ items }) {
  const style = css`
    .menu-list {
      list-style: none;
      padding: 0 14px;
      margin: 0 24px;
      border-left: 1px solid #e6e6e6;

      @media (min-width: 768px) {
        display: inline-block;
        position: fixed;
        top: 100px;
        left: 0;
        width: 25%;
        height: 100%;
        margin: 0;
        padding: 36px 30px;
        box-shadow: inset 0.2px 0.2px 10px 0px rgba(0, 0, 0, 0.25);
      }

      &__title {
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        font-weight: 300;
        text-align: left;
        color: #2256f2;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          font-weight: 400;
        }
      }
    }

    .child-menu-list {
      list-style: none;
      padding: 0 14px;
      margin: 0 14px;
      border-left: 1px solid #e6e6e6;

      &__title {
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: 300;
        text-align: left;
        color: #2256f2;
        cursor: pointer;
        display: inline-block;
        margin-bottom: 8px;

        &:hover {
          text-decoration: underline;
          font-weight: 400;
        }
      }
    }
  `;

  const [menuList, setMenuList] = useState(items);

  useEffect(() => {
    setMenuList(items);
  }, [items]);

  return (
    <div css={style}>
      <ul className="menu-list">
        {menuList.map((item) => {
          return (
            <li key={item.id}>
              <p
                className="menu-list__title"
                onClick={() => {
                  setMenuList(
                    menuList.map((listItem) => {
                      if (listItem.id === item.id) {
                        return {
                          ...listItem,
                          open: !listItem.open,
                        };
                      }
                      return listItem;
                    })
                  );
                }}
              >
                {item.title}
              </p>
              {item.children && item.open && (
                <ul className="child-menu-list">
                  {item.children.map((child) => {
                    return (
                      <li key={child.id}>
                        <Link
                          className="child-menu-list__title"
                          to={child.id}
                          spy={true}
                          smooth={true}
                        >
                          {child.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuList;
