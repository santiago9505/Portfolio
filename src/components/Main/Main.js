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
      <main className="px-4 lg:h-96">
        <section className="flex flex-col font-body font-medium px-6 py-6 lg:grid lg:grid-cols-3 lg:static lg:h-full">
          <article className="text-center text-5xl pb-6 lg:text-left lg:font-body lg:text-6xl lg:font-medium-500 lg:pt-12 2xl:text-7xl 3xl:text-8xl">
            <h1 className="text-softblue-350 2xl:py-3">Hello,</h1>
            <h1 className="text-softblue-500 2xl:py-3">this is</h1>
            <h1 className="text-white font-semibold 2xl:py-3">Santiago</h1>
          </article>
          <figure className=" lg:justify-self-center 3xl:w-6/7">
            <img
              src={Foto}
              className="w-full max-h-full border-b-8 border-gray-300 3xl:w-6/7"
              alt=""
            />
          </figure>
          <article className="justify-self-center	text-2xl pt-4 text-white col-span-2 h-2/4 lg:col-span-1 lg:flex lg:h-60  lg:font-body lg:text-2xl lg:font-medium-500 lg:text-white lg:pt-24 lg:pl-10 2xl:text-4xl 3xl:text-5xl">
            <h2 className="">
              Business Administration Passionate about I.T Lifelong learning
            </h2>
          </article>
        </section>
        <div className="">
          <figure className="py-8 lg:absolute lg:bottom-20 lg:left-0 lg:py-0 2xl:bottom-36 3xl:bottom-52">
            <img
              src={Rectangulo}
              className="h-0 w-screen lg:w-full lg:h-28 2xl:h-40 3xl:h-60"
              alt=""
            />
          </figure>
          <section className="px-4 py-6 bg-gray-300 mb-6 rounded-lg lg:bg-transparent grid grid-cols-3 justify-items-center gap-4 lg:text-center lg:grid-cols-12 lg:py-1 lg:absolute lg:bottom-14 lg:left-0 lg:w-full lg:px-20 lg:font-body lg:font-medium lg:text-blue-450 lg:text-xs lg:items-start xl:px-32 2xl:bottom-32 3xl:bottom-52 3xl:text-xl">
            <figure className="text-center">
              <img
                src={Management}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:py-2 2xl:w-20 3xl:w-28"
                alt=""
              />
              <figcaption className="text-center">
                Project <br /> Management
              </figcaption>
            </figure>
            <figure className="text-center">
              <img
                src={Data}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:py-2 2xl:w-20 3xl:w-28"
                alt=""
              />
              <figcaption className="text-center">
                Data <br /> Analyst
              </figcaption>
            </figure>
            <figure className="text-center">
              <img
                src={Finance}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:py-2 2xl:w-20 3xl:w-28"
                alt=""
              />
              <figcaption className="">Finance</figcaption>
            </figure>
            <figure className="text-center mb-4">
              <img
                src={Html}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:py-2 2xl:w-20 3xl:w-28"
                alt=""
              />
            </figure>
            <figure className="text-center">
              <img
                src={Css}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:py-2 2xl:w-20 3xl:w-28"
                alt=""
              />
            </figure>
            <figure className="text-center">
              <img
                src={Js}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:py-2 2xl:w-20 3xl:w-28"
                alt=""
              />
            </figure>
            <figure className="text-center">
              <img
                src={Bootstrap}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:pt-3 mb-2 2xl:w-20 3xl:w-28"
                alt=""
              />
              <figcaption className="text-center">Bootstrap</figcaption>
            </figure>
            <figure className="lg:pt-3">
              <img
                src={Node}
                className="w-18 hover:animate-bounce m-auto lg:w-16 lg:pt-2 lg:pb-3 2xl:w-20 3xl:w-28"
                alt=""
              />
              <figcaption className="text-center">Node.js</figcaption>
            </figure>
            <figure className="">
              <img
                src={Python}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:pt-2 lg:pb-2 2xl:w-20 3xl:w-28"
                alt=""
              />
              <figcaption className="text-center">Python</figcaption>
            </figure>
            <figure className="lg:pt-1">
              <img
                src={Reactjs}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:pt-2 lg:pb-3 2xl:w-20 3xl:w-28"
                alt=""
              />
              <figcaption className="text-center">React.js</figcaption>
            </figure>
            <figure className="lg:pt-3">
              <img
                src={Tailwind}
                className="w-18 hover:animate-bounce m-auto lg:w-16 lg:py-3 2xl:w-20 3xl:w-28"
                alt=""
              />
              <figcaption className="text-center">Tailwind</figcaption>
            </figure>
            <figure className="">
              <img
                src={Maths}
                className="w-16 hover:animate-bounce m-auto lg:w-14 lg:py-2 2xl:w-20 3xl:w-28"
                alt=""
              />
              <figcaption className="text-center">
                Discrete <br /> Mathematics
              </figcaption>
            </figure>
          </section>
        </div>
      </main>
    );
  }
}

export default Header;
