import React, { useState, useContext } from "react";
import Whatsapp from "../../assets/static/whatsapp.png";
import Correo from "../../assets/static/correo-electronico.png";

import "../../index.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import ThemeContext from "../../context/ThemeContext.js";

const Contact = () => {
  const [formTitle, textColor] = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        lastName: lastName,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Thanks, your message has been submitted");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="grid grid-cols-auto lg:grid-cols-2 pt-8 justify-center mb-10 2xl:pt-8">
      <div className="border-l-2 ml-8 pl-4 xl:h-full">
        <h1 className={formTitle}>CONTACT ME</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border rounded-b-lg px-8 w-11/12 bg-white gap-3 pt-3 pb-3 font-body font-medium text-sm md:w-5/6 md:max-w-xs lg:pt-2 2xl:max-w-sm 2xl:h-full 2xl:text-xl"
          action=""
        >
          <label htmlFor="" className="flex flex-col">
            <span className="p-1">Name</span>
            <input
              placeholder="Jhon"
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 text-sm px-1 text-softblue-500 font-body font-medium"
              type="text"
              name="firstName"
              value={name}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="p-1">Last Name</span>
            <input
              placeholder="Katzenbach"
              onChange={(e) => setLastName(e.target.value)}
              className="bg-gray-100 text-sm px-1 text-softblue-500 font-body font-medium"
              type="text"
              name="lastName"
              value={lastName}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="p-1">Email</span>
            <input
              placeholder="psicoanalista@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 text-sm px-1 text-softblue-500 font-body font-medium"
              type="email"
              name="email"
              value={email}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="p-1">Message</span>
            <textarea
              placeholder="Hello Santiago, let's work together..."
              onChange={(e) => setMessage(e.target.value)}
              className="h-20 bg-gray-100 text-sm px-1 text-softblue-500 font-body font-medium"
              type="text"
              name="message"
              value={message}
            />
          </label>
          <button
            placeholder="Send"
            className="rounded-md self-end h-8 w-24 text-white font-body font-semibold"
            type="submit"
            style={{ background: loader ? "#ccc" : "#3475cf" }}
          >
            SEND
          </button>
        </form>
      </div>
      <article className={textColor}>
        <h1 className="text-3xl text-softblue-500 font-semibold 2xl:text-4xl">
          Let's Work Together!
        </h1>
        <h2 className="flex gap-2">
          <img src={Correo} className="w-8 h-8" alt="" />{" "}
          <Link to="mailto:santigeek@hotmail.com" className="pl-2">
            santigeek@hotmail.com
          </Link>
        </h2>
        <h2 className="flex gap-2">
          <img src={Whatsapp} className="w-8 h-8" alt="" />{" "}
          <Link to="https://wa.me/qr/XCYPFO7562ULM1">+57 3195619977</Link>
        </h2>
      </article>
    </main>
  );
};

export default Contact;
