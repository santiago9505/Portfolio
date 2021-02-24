import React, { useState, useContext } from "react";
import "../../index.css";
import Triangle from "../../assets/static/triangle.png";
import ThemeContext from "../../context/ThemeContext.js";

const About = () => {
  const [textGeneral, whoAmI, santiago, lookingFor, solutions] = useContext(
    ThemeContext
  );

  return (
    <main className={textGeneral}>
      <article className="border-l-2 px-8 mx-4 lg:px-6 lg:mt-0">
        <h1 className={whoAmI}>Who am I?</h1>
        <p className="pb-2 md:text-lg lg:text-sm xl:text-base 2xl:text-lg 3xl:text-2xl 3xl:py-2">
          Hello everyone, my name is{" "}
          <strong className={santiago}>Santiago Guáqueta.</strong> {""} I am a
          business administrator and tech lover.
        </p>
        <p className="pb-2 md:text-lg lg:text-sm xl:text-base 2xl:text-lg 3xl:text-2xl 3xl:py-2">
          You're probably wondering what business administration has to do with
          software programming, and the answer is everything. At present we
          cannot think of a sustainable company without tecnologycs use. And
          that's why I'm here. <strong> </strong>
          <strong className={lookingFor}>
            Looking to jump into the IT's world.
          </strong>
        </p>
        <p className="md:text-xl lg:text-sm xl:text-base 2xl:text-lg 3xl:text-2xl 3xl:py-2">
          When I was working in the administrative area, I saw the need to help
          people with disabilities to get a job, so I set out to learn how to
          develope a web page with accessibility. Although it was a very simple
          page, this made me understand that the <strong> </strong>
          <strong className={solutions}>
            solutions for today's world are based on technology.
          </strong>
        </p>
      </article>
      <article className="">
        <img
          src={Triangle}
          className="absolute opacity-75 top-40 -right-1 origin-center transform -rotate-90 hidden lg:flex 2xl:w-40 2xl:top-60"
          alt=""
        />
        <img
          src={Triangle}
          className="w-40 opacity-25 absolute origin-center right-24 transform -rotate-45 bottom-36 hidden lg:flex 2xl:w-60 2xl:bottom-48"
          alt=""
        />
        <img
          src={Triangle}
          className="opacity-40 origin-center right-96 bottom-48 w-32 hidden lg:flex mt-60 ml-36 2xl:mt-72 2xl:w-48"
          alt=""
        />
      </article>
    </main>
  );
};

export default About;
