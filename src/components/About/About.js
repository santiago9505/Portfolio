import React, { Component } from "react";
import "../../index.css";

class About extends Component {
  render() {
    return (
      <main className="w-full text-white font-body font-medium h-auto py-10 text-md text-justify lg:grid lg:grid-cols-2">
        <article className="border-l-2 px-8 mx-4 lg:px-6 lg:mt-0">
          <h1 className="text-softblue-350 font-semibold text-4xl pb-4 md:text-3xl lg:text-2xl lg:pb-2 xl:text-3xl 2xl:text-4xl 3xl:text-6xl">
            Who am I?
          </h1>
          <p className="pb-2 md:text-lg lg:text-sm xl:text-base 2xl:text-lg 3xl:text-2xl 3xl:py-2">
            Hello everyone, my name is{" "}
            <strong className="text-2xl text-softblue-500 md:text-2xl lg:text-lg 2xl:text-xl 3xl:text-3xl">
              Santiago Guáqueta.
            </strong>
            {""} I am a business administrator and tech lover.
          </p>
          <p className="pb-2 md:text-lg lg:text-sm xl:text-base 2xl:text-lg 3xl:text-2xl 3xl:py-2">
            You're probably wondering what business administration has to do
            with software programming, and the answer is everything. At present
            we cannot think of a sustainable company without tecnologycs use.
            And that's why I'm here. <strong> </strong>
            <strong className="text-2xl text-softblue-350 md:text-2xl lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-3xl">
              Looking to jump into the IT's world.
            </strong>
          </p>
          <p className="md:text-xl lg:text-sm xl:text-base 2xl:text-lg 3xl:text-2xl 3xl:py-2">
            When I was working in the administrative area, I saw the need to
            help people with disabilities to get a job, so I set out to learn
            how to develope a web page with accessibility. Although it was a
            very simple page, this made me understand that the{" "}
            <strong> </strong>
            <strong className="md:text-2xl text-softblue-350 lg:text-sm xl:text-base 2xl:text-xl 3xl:text-3xl">
              solutions for today's world are based on technology.
            </strong>
          </p>
        </article>
      </main>
    );
  }
}

export default About;
