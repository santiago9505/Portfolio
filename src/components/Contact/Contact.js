import React, { Component } from "react";
import Whatsapp from "../../assets/static/whatsapp.png";
import Correo from "../../assets/static/correo-electronico.png";

import "../../index.css";

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
      <main className="grid grid-cols-auto lg:grid-cols-2 pt-10 justify-center mb-10">
        <div className="border-l-2 ml-8 pl-8">
          <h1 className="border-softblue-400 rounded-t-lg text-center font-body font-semibold text-white text-2xl bg-softblue-400 w-9/12 h-12 pb-0 pt-2 md:w-5/6">
            CONTACT ME
          </h1>
          <form
            onSubmit={this.handleSubmit}
            className="flex flex-col border rounded-b-lg px-8 w-9/12 bg-white gap-3 pt-3 pb-3 font-body font-medium text-sm md:w-5/6"
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
        <article className="flex flex-col px-auto font-body font-medium text-white pt-20 gap-4 mx-5 text-lg">
          <h1 className="text-3xl text-softblue-500 font-semibold">
            Let's Work Together!
          </h1>
          <h2 className="flex gap-2">
            <img src={Correo} className="w-8 h-8" alt="" />{" "}
            <a href="" className="pl-2">
              santigeek@hotmail.com
            </a>
          </h2>
          <h2 className="flex gap-2">
            <img src={Whatsapp} className="w-8 h-8" alt="" />{" "}
            <a href="">+57 3195619977</a>
          </h2>
        </article>
      </main>
    );
  }
}

export default Contact;
