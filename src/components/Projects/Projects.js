import React, { Component } from "react";
import "../../index.css";

class About extends Component {
  render() {
    return (
      <main className="flex flex-col lg:grid lg:grid-cols-2 text-white font-body font-medium h-auto lg:py-14 text-md text-justify">
        <article className="items-center pt-14 lg:pt-0">
          <iframe
            className="w-full h-96 lg:h-full mb-8 2xl:pt-6"
            src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2FSENADistritoCapital%2Fvideos%2F396933551659643%2F&show_text=false&width=840"
            frameborder="0"
          ></iframe>
        </article>
        <article className="border-l-2 mb-10 pl-4 px-8 ml-4 2xl:text-4xl 2xl:pt-10 lg:pt-0">
          <h1 className="text-softblue-350 text-4xl pb-4 font-semibold 2xl:text-6xl">
            Experience
          </h1>
          <p className="py-4">
            Experienced in{" "}
            <strong className="text-softblue-500 text-xl 2xl:text-5xl">
              customer service
            </strong>{" "}
            working on administrative processes, data analysis, strategy
            creation, and use of{" "}
            <strong className="text-softblue-500 text-xl 2xl:text-5xl">
              programming knowledge
            </strong>{" "}
            to improve user experience. I also had the opportunity to hold
            workshops to improve people's soft skills, and create my first
            project:{" "}
            <a
              className="text-softblue-350 text-xl 2xl:text-5xl"
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
