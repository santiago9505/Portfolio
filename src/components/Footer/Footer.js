import React, { useContext } from "react";
import Twitter from "../../assets/static/twitter.png";
import Instagram from "../../assets/static/instagram.png";
import Linkedin from "../../assets/static/linkedin.png";
import ThemeContext from "../../context/ThemeContext.js";

const Footer = () => {
  const bgfooter = useContext(ThemeContext);
  return (
    <footer className={bgfooter}>
      <section className="h-40 flex flex-col justify-center lg:inline-block lg:h-10 lg:w-60 lg:mx:10 lg:text-xs lg:text-center 2xl:text-lg 2xl:w-auto 3xl:text-2xl">
        <h1>© Santiago Guáqueta Angarita 2021</h1>
        <h1>
          Designed by:{" "}
          <a className="" href="https://www.behance.net/castroscar">
            <strong>Oscar Castro</strong>
          </a>
        </h1>
      </section>

      <ul className="lg:flex lg:font-body lg:text-xs lg:font-medium lg:justify-between lg:w-auto lg:gap-20 2xl:gap-32">
        <li className="lg:flex lg:flex-col lg:gap-1.5 2xl:text-lg 3xl:text-xl">
          <h1 href="#content" className="font-bold">
            CONTENT
          </h1>
          <a href="apebogota.com">Blog</a>
        </li>
        <li className="lg:flex lg:flex-col lg:gap-1.5 2xl:text-lg 3xl:text-xl">
          <h1 href="courses" className="font-bold">
            COURSES
          </h1>
          <a href="https://platzi.com/p/santiagoguquetaangarita/">Platzi</a>
        </li>
        <li className="lg:flex lg:flex-col lg:gap-1.5 2xl:text-lg 3xl:text-xl">
          <h1 href="contact me" className="font-bold">
            CONTACT ME
          </h1>
          <a href=" mailto:santigeek@hotmail.com" className="">
            santigeek@hotmail.com
          </a>
          <a href="https://wa.me/qr/XCYPFO7562ULM1">+57 3195619977</a>
        </li>
        <li className="flex justify-center gap-2 py-4 lg:grid lg:grid-cols-3 lg:content-center lg:gap-6">
          <a href="https://twitter.com/santigeek">
            <img
              src={Twitter}
              className="w-8 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 3xl:w-12 3xl:h-12"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/santigeek22/">
            <img
              src={Instagram}
              className="w-8 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 3xl:w-12 3xl:h-12"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/santiago-gu%C3%A1queta-a7522b132/">
            <img
              src={Linkedin}
              className="w-8 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 3xl:w-12 3xl:h-12"
              alt=""
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
