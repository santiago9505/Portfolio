import React, { Component } from "react";
import Rectangulo from "../../assets/static/rectángulo.png";
import Management from "../../assets/static/management.png";
import "../../index.css";

class Header extends Component {
  render() {
    return (
      <main className="flex bg-yellow-500 h-96 static my-10">
        <article>
          <h1>Hello,</h1>
          <h1>this is</h1>
          <h1>Santiago</h1>
        </article>
        <figure>
          <img src="" alt="" />
        </figure>
        <article>
          <h2>
            Business Administration <br />
            Passionate about I.T <br />
            Lifelong learning
          </h2>
          <figure className="absolute bottom-20 left-0">
            <img src={Management} className="w-14 absolute bottom-10" alt="" />
            <section className="">
              <img src={Rectangulo} className="w-screen h-28" alt="" />
            </section>
          </figure>
        </article>
      </main>
    );
  }
}

export default Header;
