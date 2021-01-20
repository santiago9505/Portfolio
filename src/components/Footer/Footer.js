import React, { Component } from "react";
import Twitter from "../../assets/static/twitter.png";
import Instagram from "../../assets/static/instagram.png";
import Linkedin from "../../assets/static/linkedin.png";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-white py-20 lg:bg-white lg:text-blue-450 lg:flex lg:px-32 lg:pt-2 lg:w-screen lg:h-20 lg:justify-center lg:absolute lg:bottom-0 lg:left-0 lg:gap-40 lg:items-center lg:py-0 2xl:left-0">
        <section className="h-40 flex flex-col justify-center lg:h-10 lg:text-xs lg:text-center">
          <h1>© Santiago Guáqueta Angarita 2021</h1>
          <h1>
            Designed by:{" "}
            <a className="" href="https://www.behance.net/castroscar">
              <strong>Oscar Castro</strong>
            </a>
          </h1>
        </section>

        <ul className="lg:flex lg:gap-32  lg:font-body lg:text-xs lg:font-medium">
          <li className="lg:flex lg:flex-col lg:gap-1.5">
            <h1 href="#content" className="font-bold">
              CONTENT
            </h1>
            <a href="">Blog</a>
          </li>
          <li className="lg:flex lg:flex-col lg:gap-1.5">
            <h1 href="courses" className="font-bold">
              COURSES
            </h1>
            <a href="https://platzi.com/p/santiagoguquetaangarita/">Platzi</a>
          </li>
          <li className="lg:flex lg:flex-col lg:gap-1.5">
            <h1 href="contact me" className="font-bold">
              CONTACT ME
            </h1>
            <a href=" mailto:santigeek@hotmail.com" className="">
              santigeek@hotmail.com
            </a>
            <a href="https://wa.me/qr/XCYPFO7562ULM1">+57 3195619977</a>
          </li>
          <li className="lg:grid lg:grid-cols-3 lg:content-center gap-4">
            <a href="https://twitter.com/santigeek">
              <img src={Twitter} className="lg:w-5" alt="" />
            </a>
            <a href="https://www.instagram.com/santigeek22/">
              <img src={Instagram} className="lg:w-5" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/santiago-gu%C3%A1queta-a7522b132/">
              <img src={Linkedin} className="lg:w-5" alt="" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
