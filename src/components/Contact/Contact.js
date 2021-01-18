import React, { Component } from "react";

import "../../index.css";

class Contact extends Component {
  render() {
    return (
      <main className="grid grid-cols-2 pt-10">
        <div className="border-l-2 pl-12">
          <h1 className="border-softblue-400 rounded-t-lg text-center font-body font-semibold text-white text-2xl bg-softblue-400 w-80 h-12 pb-0 m-0 pt-2">
            CONTACT ME
          </h1>
          <form
            className="flex flex-col border rounded-b-lg px-8 w-80 bg-white gap-3 pt-3 pb-3"
            action=""
          >
            <label htmlFor="" className="flex flex-col">
              <span>Name</span>
              <input className="bg-gray-100" type="text" name="" id="" />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Last Name</span>
              <input className="bg-gray-100" type="text" name="" id="" />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Email</span>
              <input className="bg-gray-100" type="text" name="" id="" />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Message</span>
              <input className="h-20 bg-gray-100" type="text" name="" id="" />
            </label>
            <input
              className="bg-softblue-500 rounded-md self-end h-8 w-24 text-white font-body font-semibold"
              type="submit"
            />
          </form>
        </div>
        <article className="flex flex-col pl-10 font-body font-medium text-white pt-20 gap-4 text-xl">
          <h1 className="text-3xl text-softblue-500 font-semibold">
            Let's Work Together!
          </h1>
          <h2>santigeek@hotmail.com</h2>
          <h2>+57 3195619977</h2>
        </article>
      </main>
    );
  }
}

export default Contact;
