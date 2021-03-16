import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import colombia from "./../../assets/static/colombian-flag.png";
import usa from "./../../assets/static/usa-flag.png";
import "../../index.css";
import { MenuItems } from "./MenuItems";
import { MenuItems2 } from "./MenuItems";
import ThemeContext from "../../context/ThemeContext";
import HamburguerMenu from "../../assets/static/hamburguer-menu.png";
import HamburguerMenu2 from "../../assets/static/hamburguer-menu2.png";

const Header = () => {
  const [sourceImg, classUl, underline] = useContext(ThemeContext);
  const [theme, setTheme] = useState(false);
  const [lenguaje, setLenguaje] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };

  const lenguajeClick = () => {
    setLenguaje(!lenguaje);
  };

  return (
    <header className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-end 2xl:items-end 2xl:py-2">
      <figure className="p-6 pt-4 2xl:p-10">
        <img src={sourceImg} alt="" className="w-40 2xl:w-52 3xl:w-72" />
      </figure>
      <Link onClick={handleClick} className="items-end my-8 lg:hidden w-8">
        <img src={theme ? HamburguerMenu2 : HamburguerMenu} alt="" />
      </Link>
      <ul
        className={
          theme
            ? "flex flex-col items-center text-softblue-350 lg:block lg:flex-row lg:flex gap-4 lg:gap-11 font-body text-base font-medium lg:pb-4 2xl:gap-12 2xl:text-2xl 3xl:text-3xl"
            : classUl
        }
      >
        {lenguaje
          ? MenuItems2.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink activeClassName={underline} to={item.url}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })
          : MenuItems.map((item, index) => {
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
            <img
              src={lenguaje ? colombia : usa}
              onClick={lenguajeClick}
              className="w-5 2xl:w-9 3xl:w-10"
              alt=""
            />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
