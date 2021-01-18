import React, { Component } from "react";
import Foto from "../../assets/static/foto.png";
import Rectangulo from "../../assets/static/rectángulo.png";
import Management from "../../assets/static/management.png";
import Data from "../../assets/static/data.png";
import Finance from "../../assets/static/finance.png";
import Html from "../../assets/static/html.png";
import Css from "../../assets/static/css.png";
import Js from "../../assets/static/js.png";
import Bootstrap from "../../assets/static/Bootstrap.png";
import Node from "../../assets/static/node.png";
import Python from "../../assets/static/python.png";
import Reactjs from "../../assets/static/react.png";
import Tailwind from "../../assets/static/tailwind.png";
import Maths from "../../assets/static/maths.png";

import "../../index.css";

class Header extends Component {
  render() {
    return (
      <main className="h-96">
        <section className="grid grid-cols-2 grid-rows-2 font-body font-medium px-6 py-6 lg:grid-cols-3  lg:static lg:h-full">
          <article className="text-3xl lg:font-body lg:text-6xl lg:font-medium-500 lg:pt-12">
            <h1 className="text-softblue-350">Hello,</h1>
            <h1 className="text-softblue-500">this is</h1>
            <h1 className="text-white font-semibold">Santiago</h1>
          </article>
          <figure className="lg:justify-self-center">
            <img src={Foto} className="" alt="" />
          </figure>
          <article className="text-xl text-white col-span-2 h-2/4 lg:col-span-1 lg:flex lg:h-60  lg:font-body lg:text-2xl lg:font-medium-500 lg:text-white lg:pt-24 lg:pl-10">
            <h2 clasName="">
              Business Administration Passionate about I.T <br /> Lifelong
              learning
            </h2>
          </article>
        </section>
        <div className="">
          <figure className="lg:absolute lg:bottom-20 lg:left-0">
            <img src={Rectangulo} className="lg:w-full lg:h-28" alt="" />
          </figure>
          <section className="grid grid-cols-3 ml-10 gap-2 text-white items-center justify-items-center text-center lg:grid-cols-12 lg:gap-2 lg:absolute lg:bottom-24 lg:left-0 lg:mx-32 lg:font-body lg:font-medium lg:text-blue-450 lg:text-xs lg:items-start">
            <figure className="items-center">
              <img
                src={Management}
                className="w-12 hover:animate-bounce lg:m-auto lg:py-2"
                alt=""
              />
              <figcaption className="">Project Management</figcaption>
            </figure>
            <figure className="items-center">
              <img
                src={Data}
                className="w-12 hover:animate-bounce lg:m-auto lg:py-2"
                alt=""
              />
              <figcaption className="">
                Data <br /> Analyst
              </figcaption>
            </figure>
            <figure className="">
              <img
                src={Finance}
                className="w-12 hover:animate-bounce lg:m-auto lg:py-2"
                alt=""
              />
              <figcaption className="">Finance</figcaption>
            </figure>
            <figure className="">
              <img
                src={Html}
                className="w-14 hover:animate-bounce lg:m-auto lg:py-2"
                alt=""
              />
            </figure>
            <figure className="">
              <img
                src={Css}
                className="w-14 hover:animate-bounce lg:m-auto lg:py-2"
                alt=""
              />
            </figure>
            <figure className="">
              <img
                src={Js}
                className="w-14 hover:animate-bounce lg:m-auto lg:py-2"
                alt=""
              />
            </figure>
            <figure className="">
              <img
                src={Bootstrap}
                className="w-12 hover:animate-bounce lg:m-auto lg:py-3"
                alt=""
              />
              <figcaption className="">Bootstrap</figcaption>
            </figure>
            <figure className="lg:pt-3">
              <img
                src={Node}
                className="w-14 hover:animate-bounce lg:m-auto lg:py-3"
                alt=""
              />
              <figcaption className="">Node.js</figcaption>
            </figure>
            <figure className="">
              <img
                src={Python}
                className="w-11 hover:animate-bounce lg:m-auto lg:py-3"
                alt=""
              />
              <figcaption className="">Python</figcaption>
            </figure>
            <figure className="lg:pt-1">
              <img
                src={Reactjs}
                className="w-12 hover:animate-bounce lg:m-auto lg:py-3"
                alt=""
              />
              <figcaption className="">React.js</figcaption>
            </figure>
            <figure className="lg:pt-3">
              <img
                src={Tailwind}
                className="w-14 hover:animate-bounce lg:m-auto lg:py-3"
                alt=""
              />
              <figcaption className="">Tailwind</figcaption>
            </figure>
            <figure className="">
              <img
                src={Maths}
                className="w-12 hover:animate-bounce lg:m-auto lg:py-2"
                alt=""
              />
              <figcaption className="">Discrete Mathematics</figcaption>
            </figure>
          </section>
        </div>
      </main>
    );
  }
}

export default Header;
