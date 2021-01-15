import "./index.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";

function App() {
  return (
    <div className="bg-blue-450 lg:px-32 lg:h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
