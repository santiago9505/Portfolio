import React, { Component } from "react";
import "../../index.css";

class About extends Component {
  render() {
    return (
      <main className="lg:grid lg:grid-cols-1 w-full text-white font-body font-medium h-auto py-10 text-md">
        <article className="border-l-2 px-8 mx-4 lg:px-6 lg:w-2/3">
          <h1 className="text-softblue-350 text-4xl pb-4 lg:pb-2 font-semibold md:text-4xl">
            Who am I?
          </h1>
          <p className="pb-2 md:text-lg">
            Hello everyone, my name is{" "}
            <strong className="text-2xl text-softblue-500 md:text-3xl">
              Santiago Guáqueta.
            </strong>
            {""} I am a business administrator and tech lover.
          </p>
          <p className="pb-2 md:text-lg">
            You're probably wondering what business administration has to do
            with software programming, and the answer is everything. At present
            we cannot think of a sustainable company without tecnologycs use.
            And that's why I'm here. <strong> </strong>
            <strong className="text-2xl text-softblue-350 md:text-xl">
              Looking to jump into the IT's world.
            </strong>
          </p>
          <p className="md:text-lg">
            When I was working in the administrative area, I saw the need to
            help people with disabilities to get a job, so I set out to learn
            how to develope a web page with accessibility. Although it was a
            very simple page, this made me understand that the{" "}
            <strong> </strong>
            <strong className="md:text-lg text-softblue-350">
              solutions for today's world are based on technology.
            </strong>
          </p>
        </article>
      </main>
    );
  }
}

export default About;
