/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import "../../index.css";

class About extends Component {
  render() {
    return (
      <main className="flex flex-col text-white font-body font-medium h-auto text-md text-justify lg:grid lg:grid-cols-2 lg:pt-8">
        <article className="items-center h-96 py-4 py-0 flex mt-28 mb-10 lg:h-96 lg:mt-0 3xl:h-9/7 3xl:pt-16">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSENADistritoCapital%2Fvideos%2F396933551659643%2F&show_text=false&width=560"
            className="w-full h-full 3xl:h-9/7"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </article>
        <article className="border-l-2 mb-10 pl-4 px-8 ml-4 mt-6 lg:pt-0 lg:h-4/6 3xl:h-5/6">
          <h1 className="text-softblue-350 text-4xl pb-4 font-semibold md:3xl xl:text-3xl lg:text-2xl 2xl:text-4xl 3xl:text-6xl">
            Experience
          </h1>
          <p className="py-2 md:text-xl lg:text-sm xl:text-base 2xl:text-xl 3xl:text-2xl">
            Experienced in{" "}
            <strong className="text-softblue-500 text-xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-4xl">
              customer service
            </strong>{" "}
            working on administrative processes, data analysis, strategy
            creation, and use of{" "}
            <strong className="text-softblue-500 text-xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-4xl">
              programming knowledge
            </strong>{" "}
            to improve user experience. I also had the opportunity to hold
            workshops to improve people's soft skills, and create my first
            project:{" "}
            <a
              className="text-softblue-350 text-xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-4xl"
              href="https://apebogota.com"
            >
              apebogota.com
            </a>{" "}
            a place for People with Disabilities, which allows finding available
            job vacancies in Bogotá city.
          </p>
        </article>
      </main>
    );
  }
}

export default About;
