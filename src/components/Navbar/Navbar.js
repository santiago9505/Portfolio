import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import logo from "./../../assets/static/logodark.png";
import colombia from "./../../assets/static/colombian-flag.png";
import usa from "./../../assets/static/usa-flag.png";
import "../../index.css";

class Navbar extends Component {
  render() {
    return (
      <header className="flex justify-between bg-blue-450 items-end px-32 py-8">
        <figure className="">
          <img src={logo} alt="" className="w-40" />
        </figure>
        <ul className="flex gap-10 text-softblue-350 font-body text-base font-medium">
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="active:text-white active:underline">
                <a className={MenuItems.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <li className="flex gap-1">
            <button>
              <img src={colombia} className="w-4" alt="" />
            </button>
            <h1>|</h1>
            <button>
              <img src={usa} className="w-4" alt="" />
            </button>
          </li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
