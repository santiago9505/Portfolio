import "./index.css";
import React, { useState, useContext } from "react";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import logoDark from "./assets/static/logodark.png";
import logoLight from "./assets/static/logolight.png";

function App() {
  const textGeneralDark =
    "w-full text-justify tracking-tighter text-white font-body font-medium h-auto py-10 text-md lg:grid lg:grid-cols-2";
  const WhoAmIDark =
    "text-softblue-350 font-semibold text-4xl pb-4 md:text-3xl lg:text-2xl lg:pb-2 xl:text-3xl 2xl:text-4xl 3xl:text-6xl";
  const santiagoDark =
    "text-2xl text-softblue-500 md:text-2xl lg:text-lg 2xl:text-xl 3xl:text-3xl";
  const lookingForDark =
    "text-2xl text-softblue-350 md:text-2xl lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-3xl";
  const solutionsDark =
    "md:text-2xl text-softblue-350 lg:text-sm xl:text-base 2xl:text-xl 3xl:text-3xl";
  const textGeneralLight =
    "w-full text-justify tracking-tighter text-black font-body font-medium h-auto py-10 text-md lg:grid lg:grid-cols-2";
  const WhoAmILight =
    "text-blue-450 font-semibold text-4xl pb-4 md:text-3xl lg:text-2xl lg:pb-2 xl:text-3xl 2xl:text-4xl 3xl:text-6xl";
  const santiagoLight =
    "text-2xl text-black md:text-2xl lg:text-lg 2xl:text-xl 3xl:text-3xl";
  const lookingForLight =
    "text-2xl text-black md:text-2xl lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-3xl";
  const solutionsLight =
    "md:text-2xl text-softblue-400 lg:text-sm xl:text-base 2xl:text-xl 3xl:text-3xl";
  const lyoutDark =
    "bg-blue-450 flex flex-col h-auto static lg:relative w-screen lg:px-16 lg:h-screen xl:px-32";
  const lyoutLight =
    "bg-blue-200 flex flex-col h-auto static lg:relative w-screen lg:px-16 lg:h-screen xl:px-32";
  let headerLight =
    "flex flex-col items-center hidden text-softblue-500 lg:block lg:flex-row lg:flex gap-4 lg:gap-11 font-body text-base font-medium lg:pb-4 2xl:gap-12 2xl:text-2xl 3xl:text-3xl";
  let headerDark =
    "flex flex-col items-center hidden text-softblue-350 lg:block lg:flex-row lg:flex gap-4 lg:gap-11 font-body text-base font-medium lg:pb-4 2xl:gap-12 2xl:text-2xl 3xl:text-3xl";

  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    setTheme(!theme);
  };
  return (
    <div className={theme ? lyoutLight : lyoutDark}>
      <Router>
        <ThemeContext.Provider
          value={[
            theme ? logoLight : logoDark,
            theme ? headerLight : headerDark,
            theme ? "text-indigo-900 underline" : "text-white underline",
          ]}
        >
          <Header />
        </ThemeContext.Provider>

        <Switch>
          <Route path="/aboutme">
            <ThemeContext.Provider
              value={[
                theme ? textGeneralLight : textGeneralDark,
                theme ? WhoAmILight : WhoAmIDark,
                theme ? santiagoLight : santiagoDark,
                theme ? lookingForLight : lookingForDark,
                theme ? solutionsLight : solutionsDark,
              ]}
            >
              <About />
            </ThemeContext.Provider>
          </Route>
          <Route path="/experience">
            <Projects />
          </Route>
          <Route path="/contactme">
            <Contact />
          </Route>
          <Route path="/home">
            <ThemeContext.Provider
              value={[
                theme
                  ? "text-darks-100 2xl:py-3"
                  : "text-softblue-350 2xl:py-3",
                theme
                  ? "text-softblue-400 2xl:py-3"
                  : "text-softblue-500 2xl:py-3",
                theme
                  ? "text-blue-450 font-semibold 2xl:py-3"
                  : "text-white font-semibold 2xl:py-3",

                theme ? "text-blue-450" : "text-white",
              ]}
            >
              <Main />
            </ThemeContext.Provider>
          </Route>
          <Route path="/">
            <ThemeContext.Provider
              value={[
                theme
                  ? "text-darks-100 2xl:py-3"
                  : "text-softblue-350 2xl:py-3",
                theme
                  ? "text-softblue-400 2xl:py-3"
                  : "text-softblue-500 2xl:py-3",
                theme
                  ? "text-blue-450 font-semibold 2xl:py-3"
                  : "text-white font-semibold 2xl:py-3",

                theme ? "text-blue-450" : "text-white",
              ]}
            >
              <Main />
            </ThemeContext.Provider>
          </Route>
        </Switch>
        <button
          className={
            darkMode
              ? "absolute top-10 left-10 text-sm text-black border-2 p-1 border-red-500"
              : "absolute top-10 left-10 text-sm text-white border-2 p-1 border-red-500"
          }
          type="button"
          onClick={handleClick}
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
        <ThemeContext.Provider
          value={
            theme
              ? "w-full h-18 text-center bg-blue-450 text-white lg:absolute lg:bottom-0 lg:left-0 lg:items-center lg:flex lg:justify-around lg:h-20 2xl:h-36 3xl:h-52"
              : "w-full h-18 text-center bg-white text-blue-450 lg:absolute lg:bottom-0 lg:left-0 lg:items-center lg:flex lg:justify-around lg:h-20 2xl:h-36 3xl:h-52"
          }
        >
          <Footer />
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
