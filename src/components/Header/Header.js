import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import colombia from "./../../assets/static/colombian-flag.png";
import usa from "./../../assets/static/usa-flag.png";
import "../../index.css";
import { useTranslation } from "react-i18next";
import { MenuItems } from "./MenuItems";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const [sourceImg, classUl, underline] = useContext(ThemeContext);

  return (
    <header className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-end 2xl:items-end 2xl:py-2">
      <figure className="p-6 pt-4 2xl:p-10">
        <img src={sourceImg} alt="" className="w-40 2xl:w-52 3xl:w-72" />
      </figure>

      <ul className={classUl}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink activeClassName={underline} to={item.url}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
        <li className="flex items-center justify-center gap-2 2xl:gap-4 3xl:gap-5">
          <button>
            <img src={colombia} className="w-4 2xl:w-8 3xl:w-9" alt="" />
          </button>
          <h1>|</h1>
          <button>
            <img src={usa} className="w-4 2xl:w-8 3xl:9" alt="" />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
