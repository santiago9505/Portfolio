import React, { Component } from "react";
import Twitter from "../../assets/static/twitter.png";
import Instagram from "../../assets/static/instagram.png";
import Linkedin from "../../assets/static/linkedin.png";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-white text-blue-450 flex px-32 pt-2 w-screen h-20 justify-center absolute bottom-0 left-0 gap-40 items-center">
        <section className="text-xs text-center">
          <h1>© Santiago Guáqueta Angarita 2021</h1>
          <a href="">Designed by: Oscar Castro</a>
        </section>

        <ul className="flex gap-32  font-body text-xs font-medium">
          <li className="flex flex-col gap-1.5">
            <h1 href="#content" className="font-bold">
              CONTENT
            </h1>
            <a href="">Blog</a>
          </li>
          <li className="flex flex-col gap-1.5">
            <h1 href="courses" className="font-bold">
              COURSES
            </h1>
            <a href="https://platzi.com/p/santiagoguquetaangarita/">Platzi</a>
          </li>
          <li className="flex flex-col gap-1.5">
            <h1 href="contact me" className="font-bold">
              CONTACT ME
            </h1>
            <a href="" className="">
              santigeek@hotmail.com
            </a>
            <a href="">+57 3195619977</a>
          </li>
          <li className="grid grid-cols-3 content-center">
            <img src={Twitter} className="h-5 px-1" alt="" />
            <img src={Instagram} className="h-5 px-1" alt="" />
            <img src={Linkedin} className="h-5 px-1" alt="" />
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
