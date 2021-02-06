import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from "./../../assets/static/logodark.png";
import colombia from "./../../assets/static/colombian-flag.png";
import usa from "./../../assets/static/usa-flag.png";
import "../../index.css";

class Header extends Component {
  render() {
    return (
      <header className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-end 2xl:items-end 2xl:py-2">
        <figure className="p-6 pt-4 2xl:p-10">
          <img src={logo} alt="" className="w-40 2xl:w-52" />
        </figure>

        <ul className="flex flex-col items-center text-softblue-350 lg:flex-row lg:flex gap-4 lg:gap-11 font-body text-base font-medium lg:pb-4 2xl:gap-12 2xl:text-2xl">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink activeClassName={item.cName} to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          <li className="flex items-center justify-center gap-2 2xl:gap-4">
            <button>
              <img src={colombia} className="w-4 2xl:w-8" alt="" />
            </button>
            <h1>|</h1>
            <button>
              <img src={usa} className="w-4 2xl:w-8" alt="" />
            </button>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
