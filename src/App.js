import "./index.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div
      className="bg-blue-450 flex flex-col h-auto static lg:relative
     w-screen lg:px-16 lg:h-screen xl:px-32"
    >
      <Router>
        <Header />
        <Switch>
          <Route path="/aboutme">
            <About />
          </Route>
          <Route path="/experience">
            <Projects />
          </Route>
          <Route path="/contactme">
            <Contact />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
