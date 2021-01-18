import React, { Component } from "react";
import "../../index.css";

class About extends Component {
  render() {
    return (
      <main className="lg:grid lg:grid-cols-2 text-white font-body font-medium h-auto py-10 text-md text-justify">
        <article className="border-l-2 pl-6">
          <h1 className="text-softblue-350 text-4xl pb-4 font-semibold">
            Who I am?
          </h1>
          <p className="pb-2">
            Hello everyone, my name is <strong> </strong>
            <strong className="text-2xl text-softblue-500">
              Santiago Guáqueta
            </strong>
            , <br /> I am a business administrator and a lover of technology.
          </p>
          <p className="pb-2">
            You're probably wondering what business administration has to do
            with software programming, and the answer is everything. At present
            we cannot think of a sustainable company without the use of
            technology. And that's why I'm here. <strong> </strong>
            <strong className="text-2xl text-softblue-350">
              Looking to jump into the world of IT.
            </strong>
          </p>
          <p>
            When I was working in the administrative area, I saw the need to
            help people with disabilities to get a job, so I set out to learn
            how to program a web page with accessibility. Although it was a very
            simple page, this made me understand that the <strong> </strong>
            <strong className="text-xl text-softblue-350">
              solutions for today's world are based on technology.
            </strong>
          </p>
        </article>
      </main>
    );
  }
}

export default About;
