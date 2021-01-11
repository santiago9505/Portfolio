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
      <main className="grid grid-cols-3  static h-full">
        <article className="font-body text-6xl font-medium-500 pt-12">
          <h1 className="text-softblue-350">Hello,</h1>
          <h1 className="text-softblue-500">this is</h1>
          <h1 className="text-white font-semibold">Santiago</h1>
        </article>
        <figure className="justify-self-center">
          <img src={Foto} className="" alt="" />
        </figure>
        <article className="flex h-60  font-body text-2xl font-medium-500 text-white pt-32 pl-10">
          <h2 clasName="">
            Business Administration <br />
            Passionate about I.T <br />
            Lifelong learning
          </h2>

          <figure className="absolute bottom-20 left-0">
            <img src={Rectangulo} className="w-screen h-28" alt="" />
          </figure>
          <section className="grid grid-cols-12 gap-2 h-24 absolute bottom-20 left-0 mx-32 text-center font-body font-medium text-blue-450 text-xs">
            <figure className="">
              <img
                src={Management}
                className="w-12 hover:animate-bounce m-auto"
                alt=""
              />
              <figcaption className="pt-3">Project Management</figcaption>
            </figure>
            <figure className="">
              <img
                src={Data}
                className="w-12 hover:animate-bounce m-auto"
                alt=""
              />
              <figcaption className="pt-3">
                Data <br /> Analyst
              </figcaption>
            </figure>
            <figure className="">
              <img
                src={Finance}
                className="w-12 hover:animate-bounce m-auto"
                alt=""
              />
              <figcaption className="pt-3">Finance</figcaption>
            </figure>
            <figure className="">
              <img
                src={Html}
                className="w-12 hover:animate-bounce m-auto pt-1"
                alt=""
              />
            </figure>
            <figure className="">
              <img
                src={Css}
                className="w-12 hover:animate-bounce m-auto pt-1"
                alt=""
              />
            </figure>
            <figure className="">
              <img
                src={Js}
                className="w-12 hover:animate-bounce m-auto pt-1"
                alt=""
              />
            </figure>
            <figure className="">
              <img
                src={Bootstrap}
                className="w-12 hover:animate-bounce m-auto"
                alt=""
              />
              <figcaption className="pt-3">Bootstrap</figcaption>
            </figure>
            <figure className="">
              <img
                src={Node}
                className="w-14 pt-3 hover:animate-bounce m-auto"
                alt=""
              />
              <figcaption className="pt-4">Node.js</figcaption>
            </figure>
            <figure className="">
              <img
                src={Python}
                className="w-12 hover:animate-bounce m-auto"
                alt=""
              />
              <figcaption className="pt-3">Python</figcaption>
            </figure>
            <figure className="">
              <img
                src={Reactjs}
                className="w-14 hover:animate-bounce m-auto"
                alt=""
              />
              <figcaption className="pt-3">React.js</figcaption>
            </figure>
            <figure className="">
              <img
                src={Tailwind}
                className="w-14 hover:animate-bounce m-auto pt-2"
                alt=""
              />
              <figcaption className="pt-5">Tailwind</figcaption>
            </figure>
            <figure className="">
              <img
                src={Maths}
                className="w-12 hover:animate-bounce m-auto"
                alt=""
              />
              <figcaption className="pt-3">Discrete Mathematics</figcaption>
            </figure>
          </section>
        </article>
      </main>
    );
  }
}

export default Header;
