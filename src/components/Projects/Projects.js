import React, { Component } from "react";
import "../../index.css";
import apebogota from "../../assets/static/apebogota.PNG";

class About extends Component {
  render() {
    return (
      <main className="lg:grid lg:grid-cols-2 text-white font-body font-medium h-auto lg:py-16 text-md text-justify">
        <article className="items-center pt-2">
          <iframe
            className="w-full h-72"
            src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2FSENADistritoCapital%2Fvideos%2F396933551659643%2F&show_text=false&width=840"
            frameborder="0"
          ></iframe>
        </article>
        <article className="border-l-2 pl-4 ml-3">
          <h1 className="text-softblue-350 text-4xl pb-4 font-semibold">
            Experience
          </h1>
          <p className="py-4">
            Experienced in{" "}
            <strong className="text-softblue-500 text-xl">
              customer service
            </strong>{" "}
            working on administrative processes, data analysis, strategy
            creation, and use of{" "}
            <strong className="text-softblue-500 text-xl">
              programming knowledge
            </strong>{" "}
            to improve user experience. I also had the opportunity to hold
            workshops to improve people's soft skills, and create my first
            project:{" "}
            <a
              className="text-softblue-350 text-xl"
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
