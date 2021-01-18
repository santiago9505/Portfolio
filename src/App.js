import "./index.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-blue-450 lg:px-32 lg:h-screen">
      <Router>
        <Header />
        <Switch>
          <Route path="/aboutme">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contactme">
            <h1>mi celular</h1>
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {/* 
      <Main />
      */}
    </div>
  );
}

export default App;
