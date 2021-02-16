import React, { Component } from "react";
import Whatsapp from "../../assets/static/whatsapp.png";
import Correo from "../../assets/static/correo-electronico.png";

import "../../index.css";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    email: "",
  };

  handleChange = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <main className="grid grid-cols-auto lg:grid-cols-2 pt-10 justify-center mb-10 2xl:pt-8 bg-green-500">
        <div className="border-l-2 ml-8 pl-4 xl:h-full bg-yellow-500">
          <h1 className="border-softblue-400 rounded-t-lg text-center font-body font-semibold text-white text-2xl bg-softblue-400 w-11/12 h-12 pb-0 pt-2 md:w-5/6 md:max-w-xs 2xl:max-w-sm 2xl:text-4xl 2xl:h-16 2xl:pt-4">
            CONTACT ME
          </h1>
          <form
            onSubmit={this.handleSubmit}
            className="flex flex-col border rounded-b-lg px-8 w-11/12 bg-white gap-3 pt-3 pb-3 font-body font-medium text-sm md:w-5/6 md:max-w-xs 2xl:max-w-sm 2xl:h-full 2xl:text-xl"
            action=""
          >
            <label htmlFor="" className="flex flex-col">
              <span>Name</span>
              <input
                onChange={this.handleChange}
                className="bg-gray-100"
                type="text"
                name="firstName"
                value={this.state.firstName}
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Last Name</span>
              <input
                onChange={this.handleChange}
                className="bg-gray-100"
                type="text"
                name="lastName"
                value={this.state.lastName}
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Email</span>
              <input
                onChange={this.handleChange}
                className="bg-gray-100"
                type="email"
                name="email"
                value={this.state.email}
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Message</span>
              <input
                onChange={this.handleChange}
                className="h-20 bg-gray-100"
                type="text"
                name="message"
                value={this.state.message}
              />
            </label>
            <input
              onClick={this.handleClick}
              className="bg-softblue-500 rounded-md self-end h-8 w-24 text-white font-body font-semibold"
              type="submit"
            />
          </form>
        </div>
        <article className="flex flex-col px-auto font-body font-medium text-white pt-20 gap-4 mx-5 text-lg 2xl:text-2xl">
          <h1 className="text-3xl text-softblue-500 font-semibold 2xl:text-4xl">
            Let's Work Together!
          </h1>
          <h2 className="flex gap-2">
            <img src={Correo} className="w-8 h-8" alt="" />{" "}
            <Link href="" className="pl-2">
              santigeek@hotmail.com
            </Link>
          </h2>
          <h2 className="flex gap-2">
            <img src={Whatsapp} className="w-8 h-8" alt="" />{" "}
            <Link href="">+57 3195619977</Link>
          </h2>
        </article>
      </main>
    );
  }
}

export default Contact;
